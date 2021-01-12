import React from 'react';
import { v4 as uuid } from 'uuid';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import DashboardViewTitle from '../DashboardViewTitle/DashboardViewTitle';
import InputField from '../InputField/InputField';
import { FormDescriptionInput, FormNameInput } from './RecordFormComponents/RecordFormComponents';

function RecordForm(props) {
  const currentForm = props.state.forms[props.state.currentForm];

  function validateForm() {
    if (currentForm.fields.length === 0)
      return false;
    if (currentForm.name === '' || currentForm.description === '')
      return false;
    for (let field of currentForm.fields) {
      if (!validateField(field))
        return false;
    }
    return true;
  }

  function validateField(field) {
    if (field.duplicateError)
      return false;
    if (field.label === '')
      return false;
    return true;
  }

  function checkDuplicates(label) {
    for (let field of currentForm.fields) {
      if (field.label === label) {
        return true;
      };
    }
    return false;
  }

  function handleCreateNewForm() {
    props.dispatch(
      {
        type: 'ADD_FORM',
        payload: {
          values: {},
          fields: [],
          name: '',
          description: ''
        }
      }
    )
  }

  function handleCurrentFormChange(newCurrentForm) {
    props.dispatch(
      {
        type: 'CHANGE_CURRENT_FORM',
        payload: newCurrentForm
      }
    )
  }

  function handleFormNameEdit(name) {
    const payload = {
      ...currentForm,
      name,
      modified: 'true'
    }
    props.dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload
    })
  }

  function handleFormDescriptionEdit(description) {
    const payload = {
      ...currentForm,
      description,
      modified: 'true'
    }
    props.dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload
    })
  }

  function handleToggleDeleteField(index) {
    const payload = {
      ...currentForm,
      fields: [
        ...currentForm.fields
      ]
    }

    payload.fields[index].deleted = !payload.fields[index].deleted;

    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload
      }
    )
  }

  function handleResetForm(event) {
    event.preventDefault();

    const payload = props.state.modifiedForms.find(form =>
      form.id === currentForm.id)
    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload
      }
    )
  }

  function handleLabelEdit(index) {
    return function (label) {

      const payload = {
        ...currentForm,
        modified: true,
        fields: currentForm.fields.map(field => (
          { ...field }
        ))
      }


      payload.fields[index] = {
        ...payload.fields[index],
        label,
        duplicateError: checkDuplicates(
          currentForm,
          label
        )
      };

      props.dispatch({
        type: 'UPDATE_CURRENT_FORM',
        payload
      })
    }
  }

  function handleMinMaxEdit(index, value, id) {
    return function (minmax) {
      if (
        minmax.min === currentForm.fields[index].max
        || minmax.max === currentForm.fields[index].min
      )
        return;

      if (minmax.min && value < minmax.min)
        value = minmax.min;

      else if (minmax.max && value > minmax.max)
        value = minmax.max;

      const payload = {
        ...currentForm,
        modified: true,
        fields: [
          ...currentForm.fields
        ],
        values: {
          ...currentForm.values,
          [id]: value
        }
      }

      payload.fields[index] = {
        ...payload.fields[index],
        ...minmax
      }

      props.dispatch({
        type: 'UPDATE_CURRENT_FORM',
        payload
      })
    }
  }

  function handleAddField(type, label) {
    const newField = {
      type,
      label,
      id: uuid(),
      duplicateError: checkDuplicates(currentForm, label)
    }

    if (type === 'range') {
      newField.min = 1;
      newField.max = 5;
    }

    const payload = {
      ...currentForm,
      fields: [
        ...currentForm.fields,
        newField
      ],
      modified: true
    }

    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload
      }
    )
  }

  function handleFieldValueChange(id, value) {
    const payload = {
      ...currentForm,
      values: {
        ...currentForm.values,
        [id]: value
      }
    }
    props.dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload
      }
    )
  }

  function handleMoveField(index, direction) {

    const payload = {
      ...currentForm,
      fields: [...currentForm.fields]
    }
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
      payload
    })
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    let { id: formId, values, modified, name, description, fields } = currentForm;

    let newCurrentForm;

    try {
      if (modified) {
        fields = fields
          .filter(field => !field.deleted)
          .map(field => {
            const { oldLabel, ...rest } = field;
            return { ...rest };
          })
        if (!formId) {
          newCurrentForm = await FormApiService.postForm({
            name,
            description,
            fields
          });

          formId = newCurrentForm.id;
        }
        else {
          newCurrentForm = await FormApiService.patchForm(
            formId,
            {
              name,
              description,
              fields
            });
        }

        props.dispatch({
          type: 'UPDATE_CURRENT_FORM',
          payload: {
            ...newCurrentForm,
            values: {}
          }
        });
        props.dispatch({
          type: 'TOGGLE_DISPLAY_RECORD_FORM'
        })
      }

      let record;
      record = await RecordApiService.postRecord({ formId, values });

      props.dispatch(
        {
          type: 'ADD_RECORD',
          payload: record
        }
      );
    } catch (error) { props.setApiError(error) }
  }

  const formFields = currentForm.fields
    .map(
      (field, i) => {
        if (field.deleted)
          return (
            <div key={i}>
              Field deleted
              <button
                type='button'
                onClick={() => handleToggleDeleteField(i)}
              >
                undo
              </button>
            </div>
          )

        const value = currentForm.values[field.id];

        return (
          <div key={i}>

            <button
              type='button'
              onClick={() => handleMoveField(
                i,
                'UP'
              )}
            >up</button>
            <button
              type='button'
              onClick={() => handleMoveField(
                i,
                'DOWN'
              )}
            >down</button>
            <InputField
              {...field}
              value={value === undefined ? '' : value}
              handleFieldValueChange={handleFieldValueChange}
              handleLabelEdit={handleLabelEdit(i)}
              handleMinMaxEdit={handleMinMaxEdit(i, value, field.id)}
            />
            <button
              type='button'
              onClick={() => handleToggleDeleteField(i)}
            >delete</button>
          </div>
        )
      });
  let newFormCounter = 0;
  const selectOptions = props.state.forms.map((form, i) => (
    <option key={form.id || `new-form-${++newFormCounter}`} value={i}>{form.name}</option>
  ));

  const addFieldButtons =
    Object.entries({
      string: 'Text',
      number: 'Number',
      boolean: 'Yes/No',
      range: 'Range',
      time: 'Time'
    }).map(([type, label]) => {
      return (
        <button
          key={type}
          type='button'
          onClick={() => handleAddField(
            type,
            `New ${label} Field`)}
        >Add new {label} field</button>
      )
    });

  const formIsValid = validateForm(currentForm);

  return (
    <section>

      <form
        onSubmit={event =>
          handleSubmitForm(event)}
        onReset={event =>
          handleResetForm(event)}
      >
        <DashboardViewTitle>
          New Record:
        <FormNameInput
            type='text'
            value={currentForm.name}
            onChange={(event) =>
              handleFormNameEdit(
                event.target.value
              )}
          />
        </DashboardViewTitle>
        <p>
          Select record form:
        <select
            value={props.state.currentForm}
            onChange={event =>
              handleCurrentFormChange(event.target.value)
            }
          >
            {selectOptions}
          </select>
          <button
            type='button'
            onClick={() => handleCreateNewForm(props.dispatch)}
          >Create New Form</button>
        </p>
        <p>Form Description:
        <FormDescriptionInput
            type='text'
            value={currentForm.description}
            onChange={event =>
              handleFormDescriptionEdit(event.target.value)}
          />
        </p>
        {
          !currentForm.fields.length && <p>Form must have at least one field</p>
        }
        {formFields}
        {
          !formIsValid && <p>Please correct errors before submitting</p>
        }
        <button
          disabled={!formIsValid}
          type='submit'
        >Submit Record</button>
        <button
          type='reset'>Reset</button>
        <div>
          {addFieldButtons}
        </div>
      </form>
    </section>)
}

export default RecordForm;