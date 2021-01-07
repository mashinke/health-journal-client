import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function UserErrorMessage(props) {
  const userContext = useContext(UserContext);
  if (userContext.error) {
    return <div>There was an error with your login. Please try again.</div>
  }
  return null;
}