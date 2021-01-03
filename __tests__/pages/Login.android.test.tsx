jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform'
  );
  Platform.OS = 'android';
  return Platform;
});

import React from 'react';
import {
  fireEvent,
  render,
  RenderAPI,
  waitFor
} from '@testing-library/react-native';

import Login from '../../src/pages/login';

const mockNavigate = jest.fn();

const mockNavigation: any = {
  navigate: mockNavigate
};

const mockRoute: Readonly<{ key: string; name: 'Login' }> = {
  key: 'mockRouteKey',
  name: 'Login'
};

describe('Login', () => {
  const mockUsername = 'mock-username';
  const mockPassword = 'mock-password';

  let component: RenderAPI;

  it('renders correctly', async () => {
    await waitFor(async () => {
      component = render(
        <Login navigation={mockNavigation} route={mockRoute} />
      );
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
      component = render(
        <Login navigation={mockNavigation} route={mockRoute} />
      );
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

    await waitFor(async () => {
      fireEvent.changeText(getByPlaceholderText('Username'), mockUsername);
    });

    userNameRequiredText = queryByText(/username is required/i);
    expect(userNameRequiredText).toBeNull();

    await waitFor(async () => {
      fireEvent.changeText(getByPlaceholderText('Password'), mockPassword);
    });

    passwordRequiredText = queryByText(/password is required/i);
    expect(passwordRequiredText).toBeNull();
  });
  it('should click the sign up navigation and be taken to the sign up page', async () => {
    await waitFor(async () => {
      component = render(
        <Login navigation={mockNavigation} route={mockRoute} />
      );
    });

    const { getByA11yLabel } = component;

    const signUpNav = getByA11yLabel('Go to sign up');

    await waitFor(async () => {
      fireEvent.press(signUpNav);
    });

    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});
