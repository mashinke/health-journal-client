import React, { useState } from 'react';
import SelectMultiple from '../SelectMultiple/SelectMultiple';
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect';
import { FilterByForm, FilterByDate } from '../Button/Button';
import {
  FilterSelectBar,
  FilterControlBox,
  FilterSelectLabel
} from '../FilterControlElements/FilterControlElements';

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

  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false)

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
    setShowMultiSelect(!showMultiSelect);
    setShowDatePicker(false);
  }

  function handleToggleShowDatePicker() {
    setShowDatePicker(!showDatePicker);
    setShowMultiSelect(false);
  }

  function handleShowMultiSelect() {
    setShowMultiSelect(true);
    setShowDatePicker(false);
  }

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
        (showMultiSelect || showDatePicker)
        && <FilterControlBox>
          {
            (props.filters.forms.length > 0
              || showMultiSelect)
            && <SelectMultiple
              selectedItems={props.filters.forms}
              show={showMultiSelect}
              showOn={handleShowMultiSelect}
              toggleShow={handleToggleShowMultiSelect}
              buttonLabel='Select forms'
              label='Filter by form'
              handleSelectedItemsChange={handleFormsFilterChange(props.dispatch)}
              items={formFilterItems}
            />
          }
          {
            showDatePicker
            && <DateRangeSelect
              show={showDatePicker}
              toggleShow={handleToggleShowDatePicker}
              id='form-date-range-picker'
              label='Select date range'
              fromDate={props.filters.created.from}
              toDate={props.filters.created.to}
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