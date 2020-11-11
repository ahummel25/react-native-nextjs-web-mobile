import React from 'react';
import { render } from '@testing-library/react-native';

import Login from '../../src/pages/login';

describe('Login', () => {
  it('renders correctly', () => {
    const { getByText, getAllByA11yLabel, getAllByA11yRole } = render(
      <Login />
    );

    const appNameText = getByText(/instamobile/i);
    const inputs = getAllByA11yLabel('textinput');
    const buttons = getAllByA11yRole('button');

    expect(inputs.length).toBe(2);
    expect(buttons.length).toBe(2);
    expect(appNameText).not.toBeNull();
  });
});
