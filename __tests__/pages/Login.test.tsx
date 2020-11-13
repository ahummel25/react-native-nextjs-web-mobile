import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';

import Login from '../../src/pages/login';

const mockNavigate = jest.fn();

const createTestProps = (
  props: Record<string, unknown>
): Record<string, unknown> => ({
  navigation: {
    navigate: mockNavigate
  },
  ...props
});

describe('Login', () => {
  const mockUsername = 'mock-username';
  const mockPassword = 'mock-password';

  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders correctly', () => {
    const { getByText, getAllByA11yLabel, getAllByA11yRole } = render(
      <Login {...props} />
    );

    const appNameText = getByText(/instamobile/i);
    const inputs = getAllByA11yLabel('textinput');
    const buttons = getAllByA11yRole('button');

    expect(inputs.length).toBe(2);
    expect(buttons.length).toBe(2);
    expect(appNameText).not.toBeNull();
  });
  it(`submits the login form with empty username and password fields,
        renders the appropriate error messages,
        then populates the fields and verifies the errors are gone`, async () => {
    const { getAllByA11yRole, getByPlaceholderText, queryByText } = render(
      <Login {...props} />
    );

    const buttons = getAllByA11yRole('button');

    await act(async () => {
      fireEvent.press(buttons[0]);
    });

    let userNameRequiredText = queryByText(/username is required/i);
    let passwordRequiredText = queryByText(/password is required/i);

    expect(userNameRequiredText).not.toBeNull();
    expect(passwordRequiredText).not.toBeNull();

    fireEvent.changeText(getByPlaceholderText('Username'), mockUsername);

    await waitFor(async () => {
      userNameRequiredText = queryByText(/username is required/i);
      expect(userNameRequiredText).toBeNull();
    });

    fireEvent.changeText(getByPlaceholderText('Password'), mockPassword);

    await waitFor(async () => {
      passwordRequiredText = queryByText(/password is required/i);
      expect(passwordRequiredText).toBeNull();
    });
  });
  it('should click the sign up navigation and be taken to the sign up page', async () => {
    const { getByTestId } = render(<Login {...props} />);

    const signUpNav = await getByTestId('sign-up');

    await waitFor(async () => {
      fireEvent.press(signUpNav);
    });

    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});
