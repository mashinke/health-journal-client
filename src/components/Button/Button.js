import React, { useContext } from 'react';
import { RiLogoutBoxRLine, RiAddLine, RiFileList3Line } from 'react-icons/ri';
import styled from 'styled-components';

const RoundButton = styled.a
  .attrs({ href: '#' })`
    text-align: center;
    border: .1px solid transparent;
    text-decoration: none;
    border-radius: 50%;
    height: 2.5rem;
    line-height: 2.125rem;
    width: 2.5rem;
    margin: auto .25rem;
    cursor: pointer;
    transition: 200ms all;
  `;
const SecondaryColorButton = styled(RoundButton)`
background-color: ${props => props.theme.secondary.light};
:hover {
  background-color: ${props => props.theme.secondary.medium};
  border-color: ${props => props.theme.secondary.text};
}
`;

const PrimaryColorButton = styled(RoundButton)`
background-color: ${props => props.theme.primary.light};
:hover {
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.text};
}
`;

export function LogoutButton(props) {
  return (
    <SecondaryColorButton {...props}>
      <RiLogoutBoxRLine />
    </SecondaryColorButton>
  )
};

export function NewRecordButton(props) {
  return (
    <SecondaryColorButton {...props}>
      <RiAddLine />
    </SecondaryColorButton>
  )
};

export function ReviewRecordsButton(props) {
  return (
    <SecondaryColorButton {...props}>
      <RiFileList3Line />
    </SecondaryColorButton>
  )
}