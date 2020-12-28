import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegistrationRoute(props) {
  function handleRegistrationSuccess() {
    const { history } = props;
    history.push('/login')
  };

  return (
    <section>
      <p>
        Track, manage, and gain insights from your health information.
      </p>
      <h2>Sign up</h2>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    </section>
  );
};

export default RegistrationRoute;

RegistrationRoute.defaultProps = {
  history: {
    push: () => { },
  },
};