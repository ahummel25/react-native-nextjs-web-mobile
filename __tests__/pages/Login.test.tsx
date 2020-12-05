import React from 'react';
import {
  fireEvent,
  render,
  RenderAPI,
  waitFor
} from '@testing-library/react-native';

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

  let component: RenderAPI;
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders correctly', async () => {
    await waitFor(async () => {
      component = render(<Login {...props} />);
    });

    const { getByText, getAllByA11yLabel, getAllByA11yRole } = component;

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
    await waitFor(async () => {
      component = render(<Login {...props} />);
    });

    const { getAllByA11yRole, getByPlaceholderText, queryByText } = component;

    const buttons = getAllByA11yRole('button');

    expect(buttons.length).toBe(2);

    await waitFor(async () => {
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
    await waitFor(async () => {
      component = render(<Login {...props} />);
    });

    const { getByTestId } = component;

    const signUpNav = await getByTestId('sign-up');

    await waitFor(async () => {
      fireEvent.press(signUpNav);
    });

    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});
