import React, { useContext } from 'react';
import {
  RiLogoutBoxRLine,
  RiAddLine,
  RiFileList3Line,
  RiCalendar2Line,
  RiCloseLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiArrowGoBackFill
} from 'react-icons/ri';
import styled, { ThemeContext } from 'styled-components';
import { IconContext } from 'react-icons';

const Button = styled.button
  .attrs({ type: 'button' })`
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

const SquareButton = styled(Button)`
  border-radius: .5rem;
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

const BigSquareButton = styled(SquareButton)`
  height: 2.5rem;
  line-height: 2.125rem;
  width: 2.5rem;
`;

const BigRoundSecondaryColorButton = styled(BigRoundButton)`
background-color: ${props => props.theme.secondary.light};
:hover {
  background-color: ${props => props.theme.secondary.medium};
  border-color: ${props => props.theme.secondary.text};
}
`;

const BigRoundPrimaryColorButton = styled(BigRoundButton)`
background-color: ${props => props.theme.primary.light};
:hover {
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.text};
}
`;

const SmallRoundPrimaryColorButton = styled(SmallRoundButton)`
background-color: ${props => props.theme.primary.light};
:hover {
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.text};
}
`;

const BigSquareSecondaryColorButton = styled(BigSquareButton)`
  background-color: ${props => props.theme.secondary.light};
  :hover {
    background-color: ${props => props.theme.secondary.medium};
    border-color: ${props => props.theme.secondary.text};
  }
`

const TinyRoundPrimaryColorButton = styled(TinyRoundButton)`
  background-color: ${props => props.theme.primary.light};
  :hover {
    background-color: ${props => props.theme.primary.medium};
    border-color: ${props => props.theme.primary.dark};
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