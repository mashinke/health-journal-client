import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginRoute(props) {
  function handleLoginSuccess() {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  return (
    <LoginForm
      onLoginSuccess={handleLoginSuccess}
    />
  )
};

export default LoginRoute;

LoginRoute.defaultProps = {
  location: {},
  history: {
    push: () => { },
  }
};