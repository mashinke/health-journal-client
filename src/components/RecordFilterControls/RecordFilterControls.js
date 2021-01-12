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
  console.log(props)
  return (
    <div>
      {
        props.forms.length > 0 &&
        <SelectMultiple
          buttonLabel='Select forms'
          label='Filter by form'
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
      <DateRangeSelect
        id='form-date-range-picker'
        label='Filter by date'
        fromDate={props.filters.created.from}
        toDate={props.filters.created.to}
        dispatch={
          handleDateFilterChange(props.dispatch)
        }
      />
    </div >
  )
}