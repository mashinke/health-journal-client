import React from 'react';

function handleFormIdFilterChange(event, dispatch) {
  const formIds = Array.from(event.target.options).map(({ value, selected }) => {
    return { value, selected }
  })
  const formId = formIds.filter(
    option => option.selected
  ).map(option => Number(option.value))
  dispatch(
    {
      type: 'FILTER_RECORDS',
      payload: {
        formId
      }
    }
  )
}

export default function RecordFilterControls(props) {
  const formOptions = props.forms.map((form, i) => (
    <option
      key={i}
      value={form.id}
      name={form.name}

    >{form.name}</option>
  ))
  return (
    <section>
      <h3>Filter Selection</h3>
      <div>
        <h4>Filter by Form</h4>
        <select
          multiple={true}
          onChange={event => handleFormIdFilterChange(event, props.dispatch)}
        >
          {formOptions}
        </select>
      </div>
    </section>
  )
}