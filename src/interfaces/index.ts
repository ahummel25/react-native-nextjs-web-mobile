import {
  ColorValue,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData
} from 'react-native';
import { FontSource } from '@expo-google-fonts/roboto/useFonts';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackList } from '../routes';

export type CommonNavigationProp = StackNavigationProp<
  RootStackList,
  keyof RootStackList
>;
export type CommonRouteProp = RouteProp<RootStackList, keyof RootStackList>;

export interface ContainerProps extends DeviceProps {
  containerWidth: string;
}
export interface DeviceProps {
  device?: string;
}

export interface ErrorProps {
  error?: string;
}

export interface ImageIconProps {
  a11yLabel: string;
  iconName: string;
  navigation: CommonNavigationProp;
  style: StyleProp<ImageStyle>;
}

export interface LoadFontProps {
  fontsToLoad: {
    [fontFamily: string]: FontSource;
  };
  // eslint-disable-next-line no-unused-vars
  setFontLoaded: (fontLoaded: boolean) => void;
}

export interface TextInputProps {
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (text: string) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onSubmitEditing?: (
    // eslint-disable-next-line no-unused-vars
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  secureTextEntry?: boolean;
  value?: string;
}

export interface TouchedProps {
  touched?: boolean;
}
