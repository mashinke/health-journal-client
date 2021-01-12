import React from 'react';
import {
  RiLogoutBoxRLine,
  RiAddLine,
  RiFileList3Line,
  RiCalendar2Line
} from 'react-icons/ri';
import styled from 'styled-components';

const RoundButton = styled.a
  .attrs({ href: '#' })`
    text-align: center;
    border: .1px solid transparent;
    text-decoration: none;
    border-radius: 50%;
    margin: auto .25rem;
    cursor: pointer;
    transition: 200ms all;
  `;

const BigRoundButton = styled(RoundButton)`
  height: 2.5rem;
  line-height: 2.125rem;
  width: 2.5rem;`;
const SmallRoundButton = styled(RoundButton)`
  height: 2rem;
  line-height: 1.625rem;
  width: 2rem;`;

const BigSecondaryColorButton = styled(BigRoundButton)`
background-color: ${props => props.theme.secondary.light};
:hover {
  background-color: ${props => props.theme.secondary.medium};
  border-color: ${props => props.theme.secondary.text};
}
`;

const SmallPrimaryColorButton = styled(SmallRoundButton)`
background-color: ${props => props.theme.primary.light};
:hover {
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.text};
}
`;

export function LogoutButton(props) {
  return (
    <BigSecondaryColorButton {...props}>
      <RiLogoutBoxRLine />
    </BigSecondaryColorButton>
  )
};

export function NewRecordButton(props) {
  return (
    <BigSecondaryColorButton {...props}>
      <RiAddLine />
    </BigSecondaryColorButton>
  )
};

export function FilterByForm(props) {
  return (
    <SmallPrimaryColorButton
      {...props}
      aria-label='filter selection by form'
    >
      <RiFileList3Line />
    </SmallPrimaryColorButton>
  )
}

export function FilterByDate(props) {
  return (
    <SmallPrimaryColorButton
      {...props}
      aria-label='filter selection by date range'
    >
      <RiCalendar2Line />
    </SmallPrimaryColorButton>
  )
}