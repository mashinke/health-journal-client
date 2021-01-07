import React from 'react';
import SelectMultiple from '../SelectMultiple/SelectMultiple';
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect';

function handleFormIdFilterChange(dispatch) {
  return function (forms) {
    const formId = forms.map(form => form.id)
    dispatch(
      {
        type: 'FILTER_RECORDS',
        payload: {
          formId
        }
      }
    )
  }
}

function handleDateFilterChange(dispatch) {
  return function (range) {
    const created = range;
    dispatch(
      {
        type: 'FILTER_RECORDS',
        payload: {
          created
        }
      }
    )
  }
}

export default function RecordFilterControls(props) {
  return (
    <section>
      <h3>Filter Selection</h3>
      <h4>Filter by form</h4>
      {
        props.forms.length > 0 &&
        <SelectMultiple
          buttonLabel='Select forms'
          handleSelectedItemsChange={handleFormIdFilterChange(props.dispatch)}
          items={
            props.forms.map(({ id, name }) => {
              return {
                id,
                name
              }
            })
          }
        />
      }
      <h4>Filter by Date</h4>
      <DateRangeSelect
        fromDate={props.filters.created.from}
        toDate={props.filters.created.to}
        dispatch={
          handleDateFilterChange(props.dispatch)
        }
      />
    </section >
  )
}