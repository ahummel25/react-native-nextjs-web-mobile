import React from 'react';
import { render } from '@testing-library/react-native';

import Login from '../../src/pages/login';

describe('Login', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Login />);

    const appNameText = getByText(/instamobile/i);

    expect(appNameText).not.toBeNull();
  });
});
