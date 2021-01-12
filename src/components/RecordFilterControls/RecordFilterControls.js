import React, { useState } from 'react';
import SelectMultiple from '../SelectMultiple/SelectMultiple';
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect';
import { FilterByForm, FilterByDate } from '../Button/Button';
import FilterSelectBar from '../FilterSelectBar/FilterSelectBar';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import FilterControlBox from '../FilterControlBox/FilterControlBox';

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
  const theme = useContext(ThemeContext);

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
      <IconContext.Provider
        value={
          {
            color: theme.primary.text,
            style: {
              verticalAlign: 'middle',
              fontSize: '1.25rem'
            }
          }
        }
      >
        <FilterSelectBar>
          <div>Filter Selection</div>
          <FilterByDate
            onClick={() => handleToggleShowDatePicker()}
          />
          <FilterByForm
            onClick={() => handleToggleShowMultiSelect()}
          />
        </FilterSelectBar>
      </IconContext.Provider>
      {
        (showMultiSelect || showDatePicker)
        && <FilterControlBox>
          {
            props.forms.length > 0
            && showMultiSelect
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