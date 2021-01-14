import React, { useContext } from 'react';
import {
  RiLogoutBoxRLine,
  RiAddLine,
  RiFileList3Line,
  RiCalendar2Line,
  RiCloseLine,
  RiCheckLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiArrowGoBackFill

} from 'react-icons/ri';
import styled, { ThemeContext } from 'styled-components';
import { IconContext } from 'react-icons';

const Button = styled.button
  .attrs(props => ({
    type: props.type || 'button'
  })
  )`
  display: inline-block;
  padding: 0;
  text-align: center;
  border: 1px solid transparent;
  text-decoration: none;
  margin: auto .25rem;
  cursor: pointer;
  transition: 200ms all;
  `;
const RoundButton = styled(Button)`
  border-radius: 50%;
`;

const BigRoundButton = styled(RoundButton)`
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.125rem;
  `;
const SmallRoundButton = styled(RoundButton)`
  height: 2rem;
  line-height: 1.625rem;
  width: 2rem;`;

const TinyRoundButton = styled(RoundButton)`
  height: 1.25rem;
  width: 1.25rem;
`;

const BigRoundSecondaryColorButton = styled(BigRoundButton)`
background-color: ${props => props.theme.secondary.light};
border-color: ${props => props.theme.secondary.verydark};
:hover {
  background-color: ${props => props.theme.secondary.medium};
  border-color: ${props => props.theme.secondary.text};
}
`;


const SmallRoundPrimaryColorButton = styled(SmallRoundButton)`
background-color: ${props => props.theme.primary.light};
border-color: ${props => props.theme.primary.verydark};
:hover {
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.text};
}
`;

const TinyRoundPrimaryColorButton = styled(TinyRoundButton)`
background-color: ${props => props.theme.primary.light};
border-color: ${props => props.theme.primary.verydark};
:hover {
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.text};
}
`;

export function LogoutButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.secondary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }
    >
      <BigRoundSecondaryColorButton {...props}>
        <RiLogoutBoxRLine />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  )
};

export function NewRecordButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.secondary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }
    >
      <BigRoundSecondaryColorButton {...props}>
        <RiAddLine />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  )
};

export function NewFormButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.primary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem'
          }
        }
      }
    >
      <TinyRoundPrimaryColorButton {...props}>
        <RiAddLine />
      </TinyRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}

export function FilterByForm(props) {
  const theme = useContext(ThemeContext);
  return (
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
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label='filter selection by form'
      >
        <RiFileList3Line />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}

export function FilterByDate(props) {
  const theme = useContext(ThemeContext);
  return (
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
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label='filter selection by date range'
      >
        <RiCalendar2Line />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}

export function DeleteButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.primary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem'
          }
        }
      }
    >
      <TinyRoundPrimaryColorButton {...props}>
        <RiCloseLine />
      </TinyRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}

export function UpButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.primary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem'
          }
        }
      }
    >
      <div>
        <TinyRoundPrimaryColorButton
          aria-label='move field up'
          {...props}>
          <RiArrowUpSLine />
        </TinyRoundPrimaryColorButton>
      </div>
    </IconContext.Provider>
  )
}

export function DownButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.primary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem'
          }
        }
      }
    >
      <div>
        <TinyRoundPrimaryColorButton
          aria-label='move field down'
          {...props}>
          <RiArrowDownSLine />
        </TinyRoundPrimaryColorButton>
      </div>
    </IconContext.Provider>
  )
}


export function UndoDeleteButton(props) {
  const theme = useContext(ThemeContext);
  return (
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
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label='undo field deletion'
      >
        <RiArrowGoBackFill />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}

export function YesButton(props) {
  const theme = useContext(ThemeContext);
  console.log('yesbutton')
  return (
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
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label='check box'
        style={{
          backgroundColor: `${props.checked
            ? theme.primary.dark
            : theme.primary.light
            }`,
          border: `${props.checked
            ? `2px solid ${theme.primary.verydark}`
            : `2px solid ${theme.primary.dark}`
            }`
        }}

      >
        <RiCheckLine />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}

export function NoButton(props) {
  const theme = useContext(ThemeContext);
  return (
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
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label={`${props.value ? 'uncheck' : 'check'} box`}
        style={{
          backgroundColor: `${!props.checked
            ? theme.primary.dark
            : theme.primary.light
            }`,
          border: `${(!props.checked)
            ? `2px solid ${theme.primary.verydark}`
            : `2px solid ${theme.primary.dark}`
            }`
        }}
      >
        <RiCloseLine />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}


export function RangeNumberButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <SmallRoundPrimaryColorButton
      aria-label={`select ${props.value}`}
      {...props}
      style={{
        color: theme.primary.text,
        fontWeight: 'bold',
        backgroundColor: `${props.checked
          ? theme.primary.dark
          : theme.primary.light
          }`,
        border: `${(props.checked)
          ? `2px solid ${theme.primary.verydark}`
          : `2px solid ${theme.primary.dark}`
          }`
      }}
    >
      {props.value}
    </SmallRoundPrimaryColorButton>
  )
}

export function SubmitButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.secondary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }
    >
      <BigRoundSecondaryColorButton {...props} type='submit'>
        <RiCheckLine />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  )
};

export function ResetButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.secondary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }
    >
      <BigRoundSecondaryColorButton {...props} type='reset'>
        <RiArrowGoBackFill />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  )
};


export function AddFieldButton(props) {
  const theme = useContext(ThemeContext);
  return (
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
      <SmallRoundPrimaryColorButton
        aria-label={`add a new field`}
        {...props}
      >
        <RiAddLine />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  )
}