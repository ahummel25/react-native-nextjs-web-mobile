import {
  ColorValue,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native';
import { FontSource } from '@expo-google-fonts/roboto/useFonts';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackList } from '../routes';

export type Routes = 'Login' | 'SignUp';

export type CommonNavigationProp = StackNavigationProp<RootStackList, 'Login'>;
export type CommonRouteProp = RouteProp<RootStackList, 'Login'>;

export interface DeviceProps {
  device: string;
}

export interface ErrorProps {
  error?: string;
}

export interface ImageIconProps {
  navigation: CommonNavigationProp;
  iconName: string;
}

export interface LoadFontProps {
  fontsToLoad: {
    [fontFamily: string]: FontSource;
  };
  setFontLoaded: (fontLoaded: boolean) => void;
}

export interface TextInputProps {
  fontLoaded?: boolean;
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
