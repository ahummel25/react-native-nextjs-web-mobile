jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform'
  );
  Platform.OS = 'android';
  return Platform;
});

import React from 'react';
import { render, RenderAPI, waitFor } from '@testing-library/react-native';

import Register from '../../src/pages/register';

describe('Login', () => {
  let component: RenderAPI;

  it('renders correctly', async () => {
    await waitFor(async () => {
      component = render(<Register />);
    });

    expect(component).toBeDefined();
  });
});
