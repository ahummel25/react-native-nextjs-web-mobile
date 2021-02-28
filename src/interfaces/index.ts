import {
  ColorValue,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData
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
  setFontLoaded: (fontLoaded: boolean) => void;
}

export interface TextInputProps {
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  secureTextEntry?: boolean;
  value?: string;
}

export interface TouchedProps {
  touched?: boolean;
}
