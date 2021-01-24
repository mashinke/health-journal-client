import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegistrationRoute(props) {
  function handleRegistrationSuccess() {
    const { history } = props;
    history.push('/login');
  }

  return (
    <RegistrationForm
      onRegistrationSuccess={handleRegistrationSuccess}
    />
  );
}

export default RegistrationRoute;

RegistrationRoute.defaultProps = {
  history: {
    push: () => { },
  },
};
