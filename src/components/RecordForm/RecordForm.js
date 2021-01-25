import React from 'react';
import { v4 as uuid } from 'uuid';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import InputField from '../InputField/InputField';
import SelectForm from '../SelectForm/SelectForm';
import {
  FormDescriptionInput,
  FormNameInput,
  FormNameContainer,
  RecordFormContainer,
  FormNameLabel,
  FormDescriptionLabel,
  FormFieldContainer,
  FieldUpDownButtonsContainer,
  FormSubmitResetContainer,
  FormDescriptionContainer,
  FormMetaContainer,
  FormFieldsContainer,
  FieldDeletedMessage,
  AddFieldContainer,
  AddFieldLabel,
  AddFieldLabelIcon,
  FormHeader,
  FormTitle,
  DoubleWidthFieldContainer,
  FormNameValidationError,
} from '../RecordFormComponents/RecordFormComponents';
import {
  DeleteButton,
  DownButton,
  UndoDeleteButton,
  UpButton,
  SubmitButton,
  ResetButton,
} from '../Button/Button';
import SelectSingle from '../SelectSingle/SelectSingle';

function RecordForm(props) {
  const { state, dispatch } = props;
  const currentForm = state.forms[state.currentForm];

  function validateField(field) {
    if (field.duplicateError) return false;
    if (field.label === '') return false;
    return true;
  }

  function validateForm() {
    let validForm = true;

    if (currentForm.fields.length === 0) validForm = false;
    if (currentForm.name === '') validForm = false;
    currentForm.fields.forEach((field) => {
      if (!validateField(field)) validForm = false;
      if (field.minmaxError === true) validForm = false;
    });
    return validForm;
  }

  function checkDuplicates(label) {
    let duplicate = false;
    currentForm.fields.forEach((field) => {
      if (field.label === label) {
        duplicate = true;
      }
    });
    return duplicate;
  }

  function handleFormNameEdit(name) {
    const payload = {
      ...currentForm,
      name,
      modified: 'true',
    };
    props.dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload,
    });
  }

  function handleFormDescriptionEdit(description) {
    const payload = {
      ...currentForm,
      description,
      modified: 'true',
    };
    props.dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload,
    });
  }

  function handleToggleDeleteField(index) {
    const payload = {
      ...currentForm,
      fields: [
        ...currentForm.fields,
      ],
    };

    payload.fields[index].deleted = !payload.fields[index].deleted;

    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload,
      },
    );
  }

  function handleResetForm(event) {
    event.preventDefault();
    if (currentForm.modified) {
      const payload = props.state.modifiedForms.find((form) => form.id === currentForm.id);
      if (payload) {
        props.dispatch(
          {
            type: 'UPDATE_CURRENT_FORM',
            payload,
          },
        );
      }
    }
  }

  function handleLabelEdit(index) {
    // eslint-disable-next-line func-names
    return function (label) {
      const payload = {
        ...currentForm,
        modified: true,
        fields: currentForm.fields.map((field) => (
          { ...field }
        )),
      };

      payload.fields[index] = {
        ...payload.fields[index],
        label,
        duplicateError: checkDuplicates(
          label,
        ),
      };

      props.dispatch({
        type: 'UPDATE_CURRENT_FORM',
        payload,
      });
    };
  }

  function handleMinMaxEdit(index, value, id) {
    let showVal = value;

    // eslint-disable-next-line func-names
    return function (minmax) {
      let minmaxError = false;
      if (
        (minmax.min >= currentForm.fields[index].max)
        || (minmax.max <= currentForm.fields[index].min)
      ) {
        minmaxError = true;
      }

      if (minmax.min && value < minmax.min) showVal = minmax.min;

      else if (minmax.max && value > minmax.max) showVal = minmax.max;

      const payload = {
        ...currentForm,
        modified: true,
        fields: [
          ...currentForm.fields,
        ],
        values: {
          ...currentForm.values,
          [id]: showVal,
        },
      };

      payload.fields[index] = {
        ...payload.fields[index],
        ...minmax,
        minmaxError,
      };

      props.dispatch({
        type: 'UPDATE_CURRENT_FORM',
        payload,
      });
    };
  }

  function handleAddField({ value: type, label }) {
    const showLabel = `New ${label} Field`;
    const newField = {
      type,
      label: showLabel,
      id: uuid(),
      duplicateError: checkDuplicates(showLabel),
    };

    if (type === 'range') {
      newField.min = 1;
      newField.max = 5;
    }

    const payload = {
      ...currentForm,
      fields: [
        ...currentForm.fields,
        newField,
      ],
      modified: true,
    };

    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload,
      },
    );
  }

  function handleFieldValueChange(id, value) {
    const payload = {
      ...currentForm,
      values: {
        ...currentForm.values,
        [id]: value,
      },
    };
    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload,
      },
    );
  }

  function handleMoveField(index, direction) {
    const payload = {
      ...currentForm,
      fields: [...currentForm.fields],
    };
    const tmp = payload.fields[index];

    if (direction === 'UP' && index > 0) {
      payload.fields[index] = payload.fields[index - 1];
      payload.fields[index - 1] = tmp;
      payload.modified = true;
    } else if (direction === 'DOWN' && index < payload.fields.length - 1) {
      payload.fields[index] = payload.fields[index + 1];
      payload.fields[index + 1] = tmp;
      payload.modified = true;
    } else {
      return;
    }

    props.dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload,
    });
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    let { id: formId, fields } = currentForm;
    const {
      values, modified, name, description,
    } = currentForm;

    let newCurrentForm;

    try {
      if (modified) {
        fields = fields
          .filter((field) => !field.deleted)
          .map((field) => {
            const { oldLabel, ...rest } = field;
            return { ...rest };
          });
        if (!formId) {
          newCurrentForm = await FormApiService.postForm({
            name,
            description,
            fields,
          });

          formId = newCurrentForm.id;
        } else {
          newCurrentForm = await FormApiService.patchForm(
            formId,
            {
              name,
              description,
              fields,
            },
          );
        }
        props.dispatch({
          type: 'UPDATE_CURRENT_FORM',
          payload: {
            ...newCurrentForm,
            values: {},
          },
        });
      }

      const record = await RecordApiService.postRecord({ formId, values });

      props.dispatch(
        {
          type: 'ADD_RECORD',
          payload: record,
        },
      );

      props.dispatch({
        type: 'TOGGLE_DISPLAY_RECORD_FORM',
      });
    } catch (error) { props.setApiError(error); }
  }

  const formFields = currentForm.fields
    .map(
      (field, i) => {
        if (field.deleted) {
          return (
            <FormFieldContainer key={field.id}>
              <FieldDeletedMessage>Field deleted</FieldDeletedMessage>
              <UndoDeleteButton
                onClick={() => handleToggleDeleteField(i)}
              />
            </FormFieldContainer>
          );
        }

        const value = currentForm.values[field.id];
        const formFieldChildren = (
          <>
            <FieldUpDownButtonsContainer>
              <UpButton
                onClick={() => handleMoveField(
                  i,
                  'UP',
                )}
              />
              <DownButton
                onClick={() => handleMoveField(
                  i,
                  'DOWN',
                )}
              />
            </FieldUpDownButtonsContainer>
            <InputField
              {...field}
              key={field.id}
              value={value === undefined ? '' : value}
              handleFieldValueChange={handleFieldValueChange}
              handleLabelEdit={handleLabelEdit(i)}
              handleMinMaxEdit={handleMinMaxEdit(i, value, field.id)}
            />
            <div>
              <DeleteButton
                onClick={() => handleToggleDeleteField(i)}
              />
            </div>
          </>
        );
        if (field.max - field.min >= 9) {
          return (
            <DoubleWidthFieldContainer>
              {formFieldChildren}
            </DoubleWidthFieldContainer>
          );
        }

        return (
          <FormFieldContainer key={field.id}>
            {formFieldChildren}
          </FormFieldContainer>
        );
      },
    );

  const addFieldItems = Object.entries({
    string: 'Text',
    number: 'Number',
    boolean: 'Yes/No',
    range: 'Range',
    time: 'Time',
  }).map(([value, label]) => ({
    label,
    value,
  }));

  const formIsValid = validateForm(currentForm);

  return (
    <RecordFormContainer
      onSubmit={(event) => handleSubmitForm(event)}
      onReset={(event) => handleResetForm(event)}
    >
      <FormTitle>Create an Entry</FormTitle>
      <FormHeader>
        <SelectForm
          buttonLabel={currentForm.name}
          dispatch={dispatch}
          forms={state.forms}
        />
        <FormMetaContainer>
          {currentForm.name === ''
            && (
            <FormNameValidationError
              aria-errormessage="form-name"
            >
              Please enter a name for your entry form
            </FormNameValidationError>
            )}
          <FormNameContainer>
            <FormNameLabel htmlFor="form-name">
              New Record:
            </FormNameLabel>
            <FormNameInput
              aria-invalid={currentForm.name === ''}
              id="form-name"
              type="text"
              value={currentForm.name}
              onChange={(event) => handleFormNameEdit(
                event.target.value,
              )}
            />
          </FormNameContainer>
          <FormDescriptionContainer>
            <FormDescriptionLabel
              htmlFor="form-description"
            >
              Description:
            </FormDescriptionLabel>
            <FormDescriptionInput
              id="form-description"
              type="text"
              value={currentForm.description}
              onChange={(event) => handleFormDescriptionEdit(event.target.value)}
            />
          </FormDescriptionContainer>
        </FormMetaContainer>
      </FormHeader>
      {
        !currentForm.fields.length && <p>Form must have at least one field</p>
      }
      <FormFieldsContainer>
        {formFields}

        <AddFieldContainer>
          <SelectSingle
            items={addFieldItems}
            handleSelectItem={handleAddField}
            label={<AddFieldLabelIcon />}
            StyledLabel={AddFieldLabel}
            buttonLabel="Select a field to add"
          />
        </AddFieldContainer>
      </FormFieldsContainer>
      {
        !formIsValid && <p>Please correct errors before submitting</p>
      }
      <FormSubmitResetContainer>
        <SubmitButton disabled={!formIsValid} />
        <ResetButton />
      </FormSubmitResetContainer>
    </RecordFormContainer>
  );
}

export default RecordForm;
