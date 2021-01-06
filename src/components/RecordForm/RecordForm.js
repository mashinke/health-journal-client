import React from 'react';
import { v4 as uuid } from 'uuid';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import InputField from '../InputField/InputField';


function validateForm(currentForm) {
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

function checkDuplicates(currentForm, label) {
  for (let field of currentForm.fields) {
    if (field.label === label) {
      return true;
    };
  }
  return false;
}

function handleCreateNewForm(dispatch) {
  dispatch(
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

function handleCurrentFormChange(newCurrentForm, dispatch) {
  dispatch(
    {
      type: 'CHANGE_CURRENT_FORM',
      payload: newCurrentForm
    }
  )
}

function handleFormNameEdit(name, form, dispatch) {
  const payload = {
    ...form,
    name,
    modified: 'true'
  }
  dispatch({
    type: 'UPDATE_CURRENT_FORM',
    payload
  })
}

function handleFormDescriptionEdit(description, form, dispatch) {
  const payload = {
    ...form,
    description,
    modified: 'true'
  }
  dispatch({
    type: 'UPDATE_CURRENT_FORM',
    payload
  })
}


function handleLabelEdit(index, form, dispatch) {
  return function (label) {
    const oldLabel = form.fields[index].label;
    const payload = {
      ...form,
      values: {
        ...form.values,
        [label]: form.values
      },
      fields: [
        ...form.fields,
      ]
    }

    payload.fields[index] = {
      ...form.fields[index],
      label,
      duplicateError: checkDuplicates(
        form,
        label
      )
    };

    delete payload.values[oldLabel];

    dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload
    })
  }
}

function handleMinMaxEdit(index, value, id, form, dispatch) {
  return function (minmax) {
    if (
      minmax.min === form.fields[index].max
      || minmax.max === form.fields[index].min
    )
      return;

    if (minmax.min && value < minmax.min)
      value = minmax.min;

    else if (minmax.max && value > minmax.max)
      value = minmax.max;

    const payload = {
      ...form,
      modified: true,
      fields: [
        ...form.fields
      ],
      values: {
        ...form.values,
        [id]: value
      }
    }

    payload.fields[index] = {
      ...payload.fields[index],
      ...minmax
    }

    dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload
    })
  }
}

function handleAddField(type, label, form, dispatch) {
  const newField = {
    type,
    label,
    id: uuid(),
    duplicateError: checkDuplicates(form, label)
  }

  if (type === 'range') {
    newField.min = 1;
    newField.max = 5;
  }

  const payload = {
    ...form,
    fields: [
      ...form.fields,
      newField
    ]
  }

  dispatch(
    {
      type: 'UPDATE_CURRENT_FORM',
      payload
    }
  )
}

function handleFieldValueChange(form, dispatch) {
  return function (id, value) {
    const payload = {
      ...form,
      values: {
        ...form.values,
        [id]: value
      }
    }
    dispatch(
      {
        type: 'UPDATE_CURRENT_FORM',
        payload
      }
    )
  }
}

function handleMoveField(index, direction, form, dispatch) {

  const payload = {
    ...form,
    fields: [...form.fields]
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


  dispatch({
    type: 'UPDATE_CURRENT_FORM',
    payload
  })
}

async function handleSubmitForm(event, dispatch, form) {
  event.preventDefault();
  let { id: formId, values, modified, name, description, fields } = form;

  if (modified) {
    if (!formId) {
      form = await FormApiService.postForm({
        name, description, fields
      })

      formId = form.id;
    }
    else {
      form = await FormApiService.patchForm(formId, {
        name, description, fields
      });
    }

    console.log('handling submit', form)

    dispatch({
      type: 'UPDATE_CURRENT_FORM',
      payload: form
    })
  }

  const record = await RecordApiService.postRecord({ formId, values });
  dispatch(
    {
      type: 'ADD_RECORD',
      payload: record
    }
  )
}

function RecordForm(props) {
  const currentForm = props.state.forms[props.state.currentForm];

  const formFields = currentForm.fields.map(
    (field, i) => {
      const value = currentForm.values[field.id];


      return (
        <div key={i}>

          <button
            type='button'
            onClick={() => handleMoveField(
              i,
              'UP',
              currentForm,
              props.dispatch
            )}
          >up</button>
          <button
            type='button'
            onClick={() => handleMoveField(
              i,
              'DOWN',
              currentForm,
              props.dispatch
            )}
          >down</button>
          <InputField
            {...field}
            value={value}
            handleFieldValueChange={handleFieldValueChange(currentForm, props.dispatch)}
            handleLabelEdit={handleLabelEdit(i, currentForm, props.dispatch)}
            handleMinMaxEdit={handleMinMaxEdit(i, value, field.id, currentForm, props.dispatch)}
          />

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
      range: 'Range'
    }).map(([type, label]) => {
      return (
        <button
          key={type}
          type='button'
          onClick={() => handleAddField(
            type,
            `New ${label} Field`,
            currentForm,
            props.dispatch)}
        >Add new {label} field</button>
      )
    });

  const formIsValid = validateForm(currentForm);

  return (
    <form onSubmit={event =>
      handleSubmitForm(
        event,
        props.dispatch,
        currentForm
      )}>
      <p>
        Select record form:
        <select
          value={props.state.currentForm}
          onChange={event =>
            handleCurrentFormChange(
              event.target.value,
              props.dispatch)
          }
        >
          {selectOptions}
        </select>
        <button
          type='button'
          onClick={() => handleCreateNewForm(props.dispatch)}
        >Create New Form</button>
      </p>
      <h3>New Record:
        <input
          type='text'
          value={currentForm.name}
          onChange={(event) =>
            handleFormNameEdit(
              event.target.value,
              currentForm,
              props.dispatch
            )}
        />
      </h3>
      <p>Form Description:
        <input
          type='text'
          value={currentForm.description}
          onChange={event =>
            handleFormDescriptionEdit(
              event.target.value,
              currentForm,
              props.dispatch
            )}
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
      <div>
        {addFieldButtons}
      </div>
    </form>
  )
}

export default RecordForm;