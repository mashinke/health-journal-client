import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';
import {
  FormInput,
  HaveAccountLink,
  Input,
  Label,
  SubmitButton,
  FormHeader,
  FormContainer,
  FormMain,
  FormDescription,
  StyledForm,
  FormTitle,
} from '../Form/Form';

function RegistrationForm(props) {
  const userContext = useContext(UserContext);
  const [error, setError] = useState(null);

  function handleSubmit(ev) {
    ev.preventDefault();
    const { email, username, password } = ev.target;
    AuthApiService.postUser({
      email: email.value,
      username: username.value,
      password: password.value,
    })
      .then(() => {
        AuthApiService.postLogin({
          email: email.value,
          password: password.value,
        })
          .then((res) => {
            email.value = '';
            username.value = '';
            password.value = '';
            userContext.processLogin(res.authToken);
            props.onRegistrationSuccess();
            userContext.clearError();
          });
      })
      .catch((res) => {
        setError(res.error);
      });
  }

  return (
    <FormContainer>
      <FormHeader>Health Journal</FormHeader>
      <FormMain>
        <FormDescription>
          Track, manage, and gain insights from your health information.
        </FormDescription>
        <FormTitle>Sign up</FormTitle>
        <StyledForm
          className="RegistrationForm"
          onSubmit={handleSubmit}
        >
          <div
            role="alert"
            className="alert"
          >
            {error && <p>{error}</p>}
          </div>
          <FormInput>
            <Label htmlFor="registration-name-input">
              email
            </Label>
            <Input
              type="email"
              id="registration-email-input"
              name="email"
              required
            />
          </FormInput>
          <FormInput>
            <Label htmlFor="registration-username-input">
              username
            </Label>
            <Input
              type="text"
              id="registration-username-input"
              name="username"
              required
            />
          </FormInput>
          <FormInput>
            <Label htmlFor="registration-password-input">
              password
            </Label>
            <Input
              type="password"
              id="registration-password-input"
              name="password"
              required
            />
          </FormInput>
          <footer>
            <SubmitButton>Sign up</SubmitButton>
            {' '}
            <HaveAccountLink to="/login">Already have an account?</HaveAccountLink>
          </footer>
        </StyledForm>
      </FormMain>
    </FormContainer>
  );
}

export default RegistrationForm;

RegistrationForm.defaultProps = {
  onRegistrationSuccess: () => { },
};
