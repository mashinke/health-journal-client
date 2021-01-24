import React from 'react';
import SelectMultiple from '../SelectMultiple/SelectMultiple';
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect';
import { FilterByForm, FilterByDate } from '../Button/Button';
import {
  FilterSelectBar,
  FilterControlBox,
  FilterSelectLabel,
} from '../FilterControlComponents/FilterControlComponents';

function handleFormsFilterChange(dispatch) {
  // eslint-disable-next-line func-names
  return function (forms) {
    dispatch(
      {
        type: 'FILTER_RECORDS',
        payload: {
          forms,
        },
      },
    );
  };
}

function handleDateFilterChange(dispatch) {
  // eslint-disable-next-line func-names
  return function (range) {
    const created = range;
    dispatch(
      {
        type: 'FILTER_RECORDS',
        payload: {
          created,
        },
      },
    );
  };
}

export default function RecordFilterControls(props) {
  const {
    forms,
    filters,
    dispatch,
    showMultiSelect,
    showDatePicker,
  } = props;
  const formFilterItems = forms.filter((item) => {
    let filter = true;
    filters.forms.forEach((form) => {
      if (form.id === item.id) filter = false;
    });
    return filter;
  })
    .map(({ id, name }) => ({
      id,
      name,
    }));

  function handleToggleShowMultiSelect() {
    dispatch({
      type: 'TOGGLE_MULTI_SELECT',
    });
  }

  function handleToggleShowDatePicker() {
    dispatch({
      type: 'TOGGLE_DATE_PICKER',
    });
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
        ((
          filters.forms.length > 0
          || showMultiSelect
        )
          || (
            (filters.created.to
              && filters.created.from
            ) || showDatePicker
          ))
        && (
        <FilterControlBox>
          {
            (filters.forms.length > 0
              || showMultiSelect)
            && (
            <SelectMultiple
              selectedItems={filters.forms}
              show={showMultiSelect}
              toggleShow={handleToggleShowMultiSelect}
              buttonLabel="Select forms"
              label="Filter by form"
              handleSelectedItemsChange={handleFormsFilterChange(dispatch)}
              items={formFilterItems}
            />
            )
          }
          {
            (
              (filters.created.to
                && filters.created.from
              ) || showDatePicker
            )

            && (
            <DateRangeSelect
              id="form-date-range-picker"
              label="Select date range:"
              fromDate={filters.created.from}
              toDate={filters.created.to}
              show={showDatePicker}
              dispatch={
                handleDateFilterChange(dispatch)
              }
            />
            )
          }
        </FilterControlBox>
        )
      }
    </div>
  );
}
