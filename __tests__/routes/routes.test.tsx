import React from 'react';
import { render, RenderAPI, waitFor } from '@testing-library/react-native';

import Routes from '../../src/routes';

describe.skip('Main Routes Component', () => {
  let component: RenderAPI;

  it('renders main routes component correctly', async () => {
    await waitFor(async () => {
      component = render(<Routes />);
    });

    expect(component).toBeDefined();
  });
});
