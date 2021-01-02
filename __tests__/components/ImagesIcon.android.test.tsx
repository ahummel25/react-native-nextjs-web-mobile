jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform'
  );
  Platform.OS = 'android';
  return Platform;
});

import React from 'react';
import { ImageStyle, Platform } from 'react-native';
import { Route } from '@react-navigation/routers';
import {
  fireEvent,
  render,
  RenderAPI,
  waitFor
} from '@testing-library/react-native';

import ImageIcon from '../../src/components/ImageIcon';
import { Routes } from '../../src/interfaces';
import { colors } from '../../src/styles/colors';

describe('ImageIcon', () => {
  let component: RenderAPI;
  const mockNavigate = jest.fn();

  const mockNavigation: any = {
    navigate: mockNavigate
  };

  const mockRoute: Route<Routes, undefined> = {
    key: 'Login',
    name: 'Login'
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
        navigation={mockNavigation}
        route={mockRoute}
        iconName="back"
        style={style}
      />
    );

    expect(component).toBeDefined();

    const { getByTestId } = component;

    const imageIconPress = getByTestId('image-icon-press');

    await waitFor(async () => {
      fireEvent.press(imageIconPress);
    });

    expect(mockNavigate).toHaveBeenCalledWith('Login');
  });
});
