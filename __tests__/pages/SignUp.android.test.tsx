jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform'
  );
  Platform.OS = 'android';
  return Platform;
});

import React from 'react';
import { render, RenderAPI, waitFor } from '@testing-library/react-native';

import SignUp from '../../src/pages/sign-up';

describe('Login', () => {
  let component: RenderAPI;

  it('renders correctly', async () => {
    await waitFor(async () => {
      component = render(<SignUp />);
    });

    expect(component).toBeDefined();
  });
});
