import LoginForm from './LoginForm';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockRouterPush = jest.fn();
jest.mock('next/dist/client/router', () => {
  return {
    useRouter: jest.fn().mockImplementation(() => {
      return {
        push: mockRouterPush,
      };
    }),
  };
});
describe('email validation', () => {
  it('shows validation when email is invalid', () => {
    render(<LoginForm />);
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'test');
    userEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
  });
  it('does not allow to submit form when email is empty', () => {
    render(<LoginForm />);
    userEvent.click(screen.getByText('Login'));

    expect(screen.getByText('Email is empty')).toBeInTheDocument();
  });
});

describe('password validation', () => {
  it.each([
    {
      password: 'abcdef',
      error:
        'Password should contain letters and numbers and contain between 4 and 10 characters',
    },
    {
      password: '123456',
      error:
        'Password should contain letters and numbers and contain between 4 and 10 characters',
    },
    {
      password: 'ab1',
      error:
        'Password should contain letters and numbers and contain between 4 and 10 characters',
    },
    {
      password: 'abcde123456',
      error:
        'Password should contain letters and numbers and contain between 4 and 10 characters',
    },
  ])(
    'displays error message "$error" for password input $password',
    ({ password, error }: { password: string; error: string }) => {
      render(<LoginForm />);
      userEvent.type(screen.getByPlaceholderText('Enter password'), password);
      userEvent.click(screen.getByText('Login'));
      expect(screen.getByTestId('password-validation')).toHaveTextContent(
        error
      );
    }
  );

  it('does not allow to submit form when password is empty', () => {
    render(<LoginForm />);
    userEvent.click(screen.getByText('Login'));

    expect(screen.getByText('Password is empty')).toBeInTheDocument();
  });
});

describe('when the login is successful', () => {
  it('the user gets directed to the first post page', () => {
    render(<LoginForm />);
    userEvent.type(
      screen.getByPlaceholderText('Enter email'),
      'validemail@test.de'
    );
    userEvent.type(screen.getByPlaceholderText('Enter password'), 'validpw12');
    userEvent.click(screen.getByTestId('login-button-loginform'));
    expect(mockRouterPush).toHaveBeenCalledWith('/test-pages/first-post');
  });
});

// test.todo(
//   'calls #onLoginClick when password and email are valid and user clicks the submit form "login" button'
// );
