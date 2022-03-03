import { Button, Input } from '@mui/material';
import { useReducer } from 'react';
import { useRouter } from 'next/dist/client/router';

const initialFieldState = {
  password: { value: '', isValid: true, error: '' },
  email: { value: '', isValid: true, error: '' },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'set_email':
      return {
        ...state,
        email: {
          value: action.payload.value,
          isValid: action.payload.isValid,
          error: action.payload.error,
        },
      };

    case 'set_password':
      return {
        ...state,
        password: {
          value: action.payload.value,
          isValid: action.payload.isValid,
          error: action.payload.error,
        },
      };
  }
};

const LoginForm = () => {
  const [fields, setFields] = useReducer(reducer, initialFieldState);
  const router = useRouter();

  const onChangeEmail = (e: any) => {
    setFields({
      type: 'set_email',
      payload: { ...fields.email, value: e.target.value },
    });
  };

  const onChangePassword = (e: any) => {
    setFields({
      type: 'set_password',
      payload: { ...fields.password, value: e.target.value },
    });
  };

  const handleSubmit = () => {
    const isEmailValid = /(.+)@(.+){2,}\.(.+){2,}/.test(fields.email.value);
    const isPasswordValid =
      /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{4,10}$/.test(
        fields.password.value
      );

    if (!isEmailValid) {
      setFields({
        type: 'set_email',
        payload: { ...fields.email, isValid: false, error: 'Email is invalid' },
      });
    }

    if (fields.email.value === '') {
      setFields({
        type: 'set_email',
        payload: { ...fields.email, isValid: false, error: 'Email is empty' },
      });
    }

    if (!isPasswordValid) {
      setFields({
        type: 'set_password',
        payload: {
          ...fields.password,
          isValid: false,
          error:
            "'Password should contain letters and numbers and contain between 4 and 10 characters' ",
        },
      });
    }

    if (fields.password.value === '') {
      setFields({
        type: 'set_password',
        payload: {
          ...fields.password,
          isValid: false,
          error: 'Password is empty',
        },
      });
    }

    if (isPasswordValid && isEmailValid) {
      router.push('/test-pages/first-post');
    }
  };

  return (
    <>
      <Input
        type="text"
        name="email"
        value={fields.email.value}
        onChange={onChangeEmail}
        placeholder="Enter email"
        data-testid="email-input-field"
        fullWidth={true}
      />
      <p data-testid="email-validation">
        {!fields.email.isValid && <small>{fields.email.error}</small>}
      </p>
      <Input
        type="password"
        name="password"
        value={fields.password.value}
        onChange={onChangePassword}
        placeholder="Enter password"
        data-testid="password-input-field"
        fullWidth={true}
      />
      <p data-testid="password-validation">
        {!fields.password.isValid && <small>{fields.password.error}</small>}
      </p>
      <Button
        data-testid="login-button-loginform"
        size="medium"
        variant="outlined"
        onClick={handleSubmit}
        type="submit"
      >
        Login
      </Button>
    </>
  );
};

export default LoginForm;
