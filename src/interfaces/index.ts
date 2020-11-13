import { StackNavigationProp } from '@react-navigation/stack';
import {
  ColorValue,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native';

import { RootStackList } from '../routes';

export interface DeviceProps {
  device: string;
}

type ProfileScreenNavigationProp = StackNavigationProp<RootStackList, 'Login'>;

export interface ErrorProps {
  error?: string;
}

export interface LoginProps {
  navigation: ProfileScreenNavigationProp;
}

export interface LoginValues {
  username: string;
  password: string;
}

export interface SignUpButtonProps {
  children?: JSX.Element | string;
  device?: string;
  navigation: ProfileScreenNavigationProp;
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
