import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackList } from '../routes';

export interface DeviceProps {
  device: string;
}

type ProfileScreenNavigationProp = StackNavigationProp<RootStackList, 'Login'>;

export interface LoginProps {
  navigation: ProfileScreenNavigationProp;
}

export interface SignUpButtonProps {
  children?: JSX.Element | string;
  device?: string;
  navigation: ProfileScreenNavigationProp;
}
