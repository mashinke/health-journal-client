import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';

function LoginForm(props) {
  const userContext = useContext(UserContext);
  const [error, setError] = useState(null);

  function handleSubmit(ev) {
    ev.preventDefault();
    const { email, password } = ev.target;
    setError(null);

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = '';
        password.value = '';
        userContext.processLogin(res.authToken);
        props.onLoginSuccess();
      })
      .catch(res => {
        setError(res.error);
      })
  }
  return (
    <form
      className='LoginForm'
      onSubmit={handleSubmit}
    >
      <div role='alert'>
        {error && <p>{error}</p>}
      </div>
      <div>
        <label htmlFor='login-email-input'>
          Email
          </label>
        <input
          type='text'
          id='login-email-input'
          name='email'
          required
        />
      </div>
      <div>
        <label htmlFor='login-password-input'>
          Password
          </label>
        <input
          id='login-password-input'
          name='password'
          type='password'
          required
        />
      </div>
      <button type='submit'>
        Login
      </button>
      {' '}
      <Link to='/register'>Don't have an account?</Link>

    </form>
  )
}

export default LoginForm

LoginForm.defaultProps = {
  onLoginSuccess: () => { }
}