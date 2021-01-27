import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

function UserErrorMessage() {
  const userContext = useContext(UserContext);
  if (userContext.error) {
    return <div>There was an error with your login. Please try again.</div>;
  }
  return null;
}

export default UserErrorMessage;
