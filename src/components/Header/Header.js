import React, { useContext } from 'react';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';

function Header(props) {
  const userContext = useContext(UserContext);

  return (
    <header>
      <h1>Health Journal</h1>
      {
        TokenService.hasAuthToken()
        && <button onClick={userContext.processLogout}>Logout</button>
      }
    </header>
  )
}

export default Header;