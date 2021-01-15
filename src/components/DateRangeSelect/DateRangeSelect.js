import React, { useContext } from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { RiArrowRightLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import {
  DateRangeSelectContainer,
  DateRangeSelectControls,
  DateRangeSelectInput,
  DateRangeSelectInputContainer,
  DateRangeSelectInputLabel,
  DateRangeSelectLabel,
  ShowDateFilter,
  ShowDateFilterFromTo,
  ShowDateFilterFromToArrow,
  ShowDateFilterFromToDates
} from '../DateSelectComponents/DateSelectComponents';
import './DateRangeSelect.css';
import { ThemeContext } from 'styled-components';
import { DeleteButton } from '../Button/Button';

export default function DateRangeSelect(props) {
  const { fromDate, toDate, dispatch } = props
  const theme = useContext(ThemeContext);

  function handleClearFilter() {
    dispatch({
      to: null,
      from: null
    })
  }

  function handleDateChange(type, value) {
    switch (type) {
      case 'FROM':
        if (toDate === null || value <= toDate) {
          dispatch({
            to: toDate,
            from: value
          });
        }
        break;
      case 'TO':
        if (fromDate === null || value >= fromDate) {
          dispatch({
            to: value,
            from: fromDate
          })
        }
        break;
      default:
        break;
    }
  }

  return (
    <DateRangeSelectContainer id={props.id}>
      {props.fromDate && props.toDate
        && <ShowDateFilter>
          <ShowDateFilterFromTo>
            <ShowDateFilterFromToDates>
              {props.fromDate.toLocaleDateString(
                undefined,
                {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )}
            </ShowDateFilterFromToDates>
            <ShowDateFilterFromToArrow>
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
                <RiArrowRightLine />
              </IconContext.Provider>
            </ShowDateFilterFromToArrow>
            <ShowDateFilterFromToDates>
              {props.toDate.toLocaleDateString(
                undefined,
                {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )}
            </ShowDateFilterFromToDates>
          </ShowDateFilterFromTo>
          <DeleteButton type='button'
            onClick={() => handleClearFilter()} />
        </ShowDateFilter>}
      {
        props.show
        && <DateRangeSelectControls>
          <DateRangeSelectLabel htmlFor={props.id}>
            {props.label}
          </DateRangeSelectLabel>
          <DateRangeSelectInputContainer>
            <DateRangeSelectInput>
              <DateRangeSelectInputLabel htmlFor='from-date'>
                From:
            </DateRangeSelectInputLabel>
              <DatePicker
                value={fromDate}
                maxDate={new Date()}
                onChange={value => handleDateChange('FROM', value)}
              />
            </DateRangeSelectInput>
            <DateRangeSelectInput>
              <DateRangeSelectInputLabel htmlFor='to-date'>
                To:
            </DateRangeSelectInputLabel>
              <DatePicker
                value={toDate}
                maxDate={new Date()}
                onChange={value => handleDateChange('TO', value)}
              />
            </DateRangeSelectInput>
          </DateRangeSelectInputContainer>
        </DateRangeSelectControls>
      }
    </DateRangeSelectContainer >
  )
}