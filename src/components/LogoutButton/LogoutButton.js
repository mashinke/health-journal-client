import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { ThemeContext } from 'styled-components';

const SquareButton = styled.button
  .attrs({ type: 'button' })`
    border: .1px solid transparent;;
    border-radius: 50%;
    height: 3.25rem;
    width: 3.25rem;
    margin: auto .5rem;
    cursor: pointer;
    background-color: ${props => props.theme.secondary.light};
    transition: 200ms all;
    :hover {
      background-color: ${props => props.theme.secondary.medium};
      border-color: ${props => props.theme.secondary.text};
    }
`;

function LogoutButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <SquareButton onClick={() => props.onClick()}>
      <IconContext.Provider value={
        {
          color: theme.secondary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }>
        <RiLogoutBoxRLine />
      </IconContext.Provider>
    </SquareButton>
  )
}

export default LogoutButton;