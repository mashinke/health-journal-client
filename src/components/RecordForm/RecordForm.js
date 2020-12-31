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
        handleFieldValueChange={
          handleFieldValueChange(props.dispatch)
        } />
    });
  const selectOptions = props.state.forms.map((form, i) => (
    <option key={form.id} value={i}>{form.name}</option>
  ));
  
  return (
    <form onSubmit={event =>
      handleSubmitForm(
        event,
        props.dispatch,
        currentForm
      )}>
      <p>
        Select record form:
        <select onChange={event =>
          handleCurrentFormChange(
            event.target.value,
            props.dispatch)
        }>
          {selectOptions}
        </select>
      </p>
      <h3>New Record: {currentForm.name}</h3>
      { currentForm.description && <p>{currentForm.description}</p>}
      { formFields}
      <button
        type='submit'
      >Submit Record</button>
    </form >
  )
}

export default RecordForm;