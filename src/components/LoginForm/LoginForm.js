import React, { useState, useContext } from 'react';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import {
  FormInput,
  HaveAccountLink,
  Input,
  Label,
  SubmitButton,
  FormHeader,
  FormContainer,
  FormMain,
  StyledForm,
  FormTitle,
} from '../Form/Form';

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
      .then((res) => {
        email.value = '';
        password.value = '';
        userContext.processLogin(res.authToken);
        props.onLoginSuccess();
        userContext.clearError();
      })
      .catch((res) => {
        setError(res.error);
      });
  }
  return (
    <FormContainer>
      <FormHeader>Health Journal</FormHeader>
      <FormMain>
        <FormTitle>Login</FormTitle>
        <StyledForm
          className="LoginForm"
          onSubmit={handleSubmit}
        >
          <div role="alert">
            {error && <p>{error}</p>}
          </div>
          <FormInput>
            <Label htmlFor="login-email-input">
              Email
            </Label>
            <Input
              type="text"
              id="login-email-input"
              name="email"
              required
            />
          </FormInput>
          <FormInput>
            <Label htmlFor="login-password-input">
              Password
            </Label>
            <Input
              id="login-password-input"
              name="password"
              type="password"
              required
            />
          </FormInput>
          <SubmitButton>Login</SubmitButton>
          {' '}
          <HaveAccountLink to="/register">Don&apost have an account?</HaveAccountLink>

        </StyledForm>
      </FormMain>
    </FormContainer>
  );
}

export default LoginForm;

LoginForm.defaultProps = {
  onLoginSuccess: () => { },
};
