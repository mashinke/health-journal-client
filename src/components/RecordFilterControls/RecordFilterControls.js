import React, { useState } from 'react';
import SelectMultiple from '../SelectMultiple/SelectMultiple';
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect';
import { FilterByForm, FilterByDate } from '../Button/Button';
import {
  FilterSelectBar,
  FilterControlBox,
  FilterSelectLabel
} from '../FilterControlComponents/FilterControlComponents';

function handleFormsFilterChange(dispatch) {
  return function (forms) {
    dispatch(
      {
        type: 'FILTER_RECORDS',
        payload: {
          forms
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

  const formFilterItems = props.forms.filter(item => {
    for (let form of props.filters.forms) {
      if (form.id === item.id) return false;
    }
    return true;
  })
    .map(({ id, name }) => {
      return {
        id,
        name
      }
    })

  function handleToggleShowMultiSelect() {
    console.log('sms')
    props.dispatch({
      type: 'TOGGLE_MULTI_SELECT'
    })
  }

  function handleToggleShowDatePicker() {
    console.log('sdp')
    props.dispatch({
      type: 'TOGGLE_DATE_PICKER'
    })
  }

  console.log(props)
  return (
    <div>
      <FilterSelectBar>
        <FilterSelectLabel>Filter Selection:</FilterSelectLabel>
        <FilterByDate
          onClick={() => handleToggleShowDatePicker()}
        />
        <FilterByForm
          onClick={() => handleToggleShowMultiSelect()}
        />
      </FilterSelectBar>
      {
        ((
          props.filters.forms.length > 0
          || props.showMultiSelect
        )
          || (
            (props.filters.created.to
              && props.filters.created.from
            ) || props.showDatePicker
          ))
        && <FilterControlBox>
          {
            (props.filters.forms.length > 0
              || props.showMultiSelect)
            && <SelectMultiple
              selectedItems={props.filters.forms}
              show={props.showMultiSelect}
              toggleShow={handleToggleShowMultiSelect}
              buttonLabel='Select forms'
              label='Filter by form'
              handleSelectedItemsChange={handleFormsFilterChange(props.dispatch)}
              items={formFilterItems}
            />
          }
          {
            (
              (props.filters.created.to
                && props.filters.created.from
              ) || props.showDatePicker
            )

            && <DateRangeSelect
              id='form-date-range-picker'
              label='Select date range:'
              fromDate={props.filters.created.from}
              toDate={props.filters.created.to}
              show={props.showDatePicker}
              dispatch={
                handleDateFilterChange(props.dispatch)
              }
            />
          }
        </FilterControlBox>
      }
    </div >
  )
}