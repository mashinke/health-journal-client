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
  RiArrowGoBackFill,

} from 'react-icons/ri';
import styled, { ThemeContext } from 'styled-components';
import { IconContext } from 'react-icons';

const Button = styled.button
  .attrs((props) => ({
    type: props.type || 'button',
  }))`
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
color: ${(props) => props.theme.secondary.text};
background-color: ${(props) => props.theme.secondary.light};
border-color: ${(props) => props.theme.secondary.verydark};
:hover {
  background-color: ${(props) => props.theme.secondary.medium};
  border-color: ${(props) => props.theme.secondary.text};
}
:disabled {
  color: ${(props) => props.theme.secondary.dark};
  :hover {
    background-color: ${(props) => props.theme.secondary.light};
    border-color: ${(props) => props.theme.secondary.verydark};
  }
}
`;

const SmallRoundPrimaryColorButton = styled(SmallRoundButton)`
color: ${(props) => props.theme.primary.text};
background-color: ${(props) => props.theme.primary.light};
border-color: ${(props) => props.theme.primary.verydark};
:hover {
  background-color: ${(props) => props.theme.primary.medium};
  border-color: ${(props) => props.theme.primary.text};
}
`;

const TinyRoundPrimaryColorButton = styled(TinyRoundButton)`
color: ${(props) => props.theme.primary.text};
background-color: ${(props) => props.theme.primary.light};
border-color: ${(props) => props.theme.primary.verydark};
:hover {
  background-color: ${(props) => props.theme.primary.medium};
  border-color: ${(props) => props.theme.primary.text};
}
`;

export function LogoutButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem',
          },
        }
      }
    >
      <BigRoundSecondaryColorButton {...props}>
        <RiLogoutBoxRLine />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  );
}

export function NewRecordButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem',
          },
        }
      }
    >
      <BigRoundSecondaryColorButton {...props}>
        <RiAddLine />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  );
}

export function NewFormButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem',
          },
        }
      }
    >
      <TinyRoundPrimaryColorButton {...props}>
        <RiAddLine />
      </TinyRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function FilterByForm(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem',
          },
        }
      }
    >
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label="filter selection by form"
      >
        <RiFileList3Line />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function FilterByDate(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem',
          },
        }
      }
    >
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label="filter selection by date range"
      >
        <RiCalendar2Line />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function DeleteButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem',
          },
        }
      }
    >
      <TinyRoundPrimaryColorButton {...props}>
        <RiCloseLine />
      </TinyRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function UpButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem',
          },
        }
      }
    >
      <div>
        <TinyRoundPrimaryColorButton
          aria-label="move field up"
          {...props}
        >
          <RiArrowUpSLine />
        </TinyRoundPrimaryColorButton>
      </div>
    </IconContext.Provider>
  );
}

export function DownButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1rem',
          },
        }
      }
    >
      <div>
        <TinyRoundPrimaryColorButton
          aria-label="move field down"
          {...props}
        >
          <RiArrowDownSLine />
        </TinyRoundPrimaryColorButton>
      </div>
    </IconContext.Provider>
  );
}

export function UndoDeleteButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem',
          },
        }
      }
    >
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label="undo field deletion"
      >
        <RiArrowGoBackFill />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function YesButton(props) {
  const { checked } = props;
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem',
          },
        }
      }
    >
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label="check box"
        style={{
          backgroundColor: `${checked
            ? theme.primary.dark
            : theme.primary.light
          }`,
          border: `${checked
            ? `2px solid ${theme.primary.verydark}`
            : `2px solid ${theme.primary.dark}`
          }`,
        }}

      >
        <RiCheckLine />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function NoButton(props) {
  const { value, checked } = props;
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem',
          },
        }
      }
    >
      <SmallRoundPrimaryColorButton
        {...props}
        aria-label={`${value ? 'uncheck' : 'check'} box`}
        style={{
          backgroundColor: `${!checked
            ? theme.primary.dark
            : theme.primary.light
          }`,
          border: `${(!checked)
            ? `2px solid ${theme.primary.verydark}`
            : `2px solid ${theme.primary.dark}`
          }`,
        }}
      >
        <RiCloseLine />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}

export function RangeNumberButton(props) {
  const { value, checked } = props;
  const theme = useContext(ThemeContext);
  return (
    <SmallRoundPrimaryColorButton
      aria-label={`select ${value}`}
      {...props}
      style={{
        color: 'inherit',
        fontWeight: 'bold',
        backgroundColor: `${checked
          ? theme.dark
          : theme.primary.light
        }`,
        border: `${(checked)
          ? `2px solid ${theme.primary.verydark}`
          : '2px solid theme.primary.dark}'
        }`,
      }}
    >
      {value}
    </SmallRoundPrimaryColorButton>
  );
}

export function SubmitButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem',
          },
        }
      }
    >
      <BigRoundSecondaryColorButton {...props} type="submit">
        <RiCheckLine />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  );
}

export function ResetButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem',
          },
        }
      }
    >
      <BigRoundSecondaryColorButton {...props} type="reset">
        <RiArrowGoBackFill />
      </BigRoundSecondaryColorButton>
    </IconContext.Provider>
  );
}

export function AddFieldButton(props) {
  return (
    <IconContext.Provider
      value={
        {
          color: 'inherit',
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem',
          },
        }
      }
    >
      <SmallRoundPrimaryColorButton
        aria-label="add a new field"
        {...props}
      >
        <RiAddLine />
      </SmallRoundPrimaryColorButton>
    </IconContext.Provider>
  );
}
