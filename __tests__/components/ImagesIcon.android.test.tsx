jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform'
  );
  Platform.OS = 'android';
  return Platform;
});

import React from 'react';
import { ImageStyle, Platform } from 'react-native';
import {
  fireEvent,
  render,
  RenderAPI,
  waitFor
} from '@testing-library/react-native';

import ImageIcon from '../../src/components/ImageIcon';
import { colors } from '../../src/styles/colors';

describe('ImageIcon', () => {
  let component: RenderAPI;
  const mockA11yLabel = 'Back to Login';
  const mockPop = jest.fn();

  const mockNavigation: any = {
    pop: mockPop
  };

  const style: ImageStyle = {
    marginBottom: Platform.OS === 'android' ? 10 : 0,
    marginLeft: 10,
    width: 20,
    height: 20,
    tintColor: colors.lightBlue
  };

  it('renders correctly and navigates', async () => {
    component = render(
      <ImageIcon
        a11yLabel={mockA11yLabel}
        navigation={mockNavigation}
        iconName="back"
        style={style}
      />
    );

    expect(component).toBeDefined();

    const { getByA11yLabel } = component;

    const imageIconPress = getByA11yLabel('Back to Login');

    await waitFor(async () => {
      fireEvent.press(imageIconPress);
    });

    expect(mockPop).toHaveBeenCalled();
    expect(mockPop.call.length).toBe(1);
  });
});
