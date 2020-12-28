import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';

function RegistrationForm(props) {
  const userContext = useContext(UserContext);
  const [error, setError] = useState(null);

  function handleSubmit(ev) {
    ev.preventDefault();
    const { email, username, password } = ev.target;
    AuthApiService.postUser({
      email: email.value,
      username: username.value,
      password: password.value
    })
      .then(res => {
        AuthApiService.postLogin({
          email: email.value,
          password: password.value
        })
          .then(res => {
            email.value = '';
            username.value = '';
            password.value = '';
            userContext.processLogin(res.authToken);
            props.onRegistrationSuccess();
          });
      })
      .catch(res => {
        setError(res.error);
      })
  }

  return (
    <form
      className='RegistrationForm'
      onSubmit={handleSubmit}
    >
      <div
        role='alert'
        className='alert'>
        {error && <p>{error}</p>}
      </div>
      <div>
        <label htmlFor='registration-name-input'>
          Enter your name
        </label>
        <input
          type='email'
          id='registration-email-input'
          name='email'
          required
        />
      </div>
      <div>
        <label htmlFor='registration-username-input'>
          Choose a username
        </label>
        <input
          type='text'
          id='registration-username-input'
          name='username'
          required
        />
      </div>
      <div>
        <label htmlFor='registration-password-input'>
          Choose a password
        </label>
        <input
          type='password'
          id='registration-password-input'
          name='password'
          required
        />
      </div>
      <footer>
        <button type='submit'>
          Sign up
          </button>
        {' '}
        <Link to='/login'>Already have an account?</Link>
      </footer>
    </form>
  )
}

export default RegistrationForm;

RegistrationForm.defaultProps = {
  onRegistrationSuccess: () => { }
}
