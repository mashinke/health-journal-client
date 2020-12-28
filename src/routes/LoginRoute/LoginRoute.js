import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginRoute(props) {
  const { location, history } = props;
  return (
    <section>
      <h2>Login</h2>
      <LoginForm
        onLoginSuccess={() => handleLoginSuccess(location, history)}
      />
    </section>
  );
};

export default LoginRoute;

const handleLoginSuccess = (location, history) => {
  const destination = (location.state || {}).from || '/';
  history.push(destination);
};

LoginRoute.defaultProps = {
  location: {},
  history: {
    push: () => { },
  }
};