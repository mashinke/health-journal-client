import React from 'react';
import RecordApiService from '../../services/record-api-service';
import { StringInput, NumberInput, BooleanInput, RangeInput } from '../InputField/InputField';

function handleCurrentFormChange(newCurrentForm, dispatch) {
  dispatch(
    {
      type: 'CHANGE_CURRENT_FORM',
      payload: newCurrentForm
    }
  )
}

function handleLabelEdit(index, dispatch) {
  return function (label) {
    dispatch({
      type: 'UPDATE_FIELD_NAME',
      payload: {
        index,
        label
      }
    })
  }
}

function handleFormNameEdit(name, dispatch) {
  dispatch({
    type: 'UPDATE_FORM_NAME',
    payload: {
      name
    }
  })
}

function handleMinMaxEdit(index, dispatch) {
  return function (property, value) {
    dispatch({
      type: 'UPDATE_MIN_MAX',
      payload: {
        minmax: { [property]: value },
        index
      }
    })
  }
}

function handleAddField(field, dispatch) {
  dispatch(
    {
      type: 'ADD_CURRENT_FORM_FIELD',
      payload: field
    }
  )
}

function handleFieldValueChange(dispatch) {
  return function (label, value) {
    dispatch(
      {
        type: 'UPDATE_FIELD_VALUE',
        payload: { [label]: value }
      }
    )
  }
}

async function handleSubmitForm(event, dispatch, form) {
  event.preventDefault();
  const { id: formId, values } = form;
  const record = await RecordApiService.postRecord({ formId, values });
  dispatch(
    {
      type: 'SUBMIT_FORM',
      payload: record
    }
  )
}

function RecordForm(props) {
  const currentForm = props.state.forms[props.state.currentForm];
  const formFields = currentForm.fields.map(
    (field, i) => {
      const value =
        currentForm.values[field.label] || '';
      let Field;
      switch (field.type) {
        case 'number':
          Field = NumberInput;
          break;
        case 'boolean':
          Field = BooleanInput;
          break;
        case 'range':
          Field = RangeInput;
          break;
        default:
          Field = StringInput;
          break;
      }
      return <Field
        key={i}
        {...field}
        value={value}
        handleFieldValueChange={handleFieldValueChange(props.dispatch)}
        handleLabelEdit={handleLabelEdit(i, props.dispatch)}
        handleMinMaxEdit={handleMinMaxEdit(i, props.dispatch)}
      />
    });
  const selectOptions = props.state.forms.map((form, i) => (
    <option key={form.id} value={i}>{form.name}</option>
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
          onClick={() => handleAddField({
            type,
            label
          }, props.dispatch)}
        >Add new {label} field</button>
      )
    });

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
      </p>
      <h3>New Record:
        <input
          type='text'
          value={currentForm.name}
          onChange={(event) =>
            handleFormNameEdit(
              event.target.value,
              props.dispatch
            )}
        />
      </h3>
      {currentForm.description && <p>{currentForm.description}</p>}
      {formFields}
      <button
        type='submit'
      >Submit Record</button>
      <div>
        {addFieldButtons}
      </div>
    </form>
  )
}

export default RecordForm;