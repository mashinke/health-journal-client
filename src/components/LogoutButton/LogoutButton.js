import React from 'react';
import styled from 'styled-components';
import { GrLogout } from 'react-icons/gr';
import { IconContext } from 'react-icons';

const SquareButton = styled.button
  .attrs({ type: 'button' })`
    border: none;
    height: 2.75rem;
    width: 2.25rem;
    padding: 0 0 0 .375rem;
    margin: auto 0;
`;

function LogoutButton(props) {
  return (
    <SquareButton onClick={() => props.onClick()}>
      <IconContext.Provider value={
        {
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }>
        <GrLogout />
      </IconContext.Provider>
    </SquareButton>
  )
}

export default LogoutButton;