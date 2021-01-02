import { CommonRouteProp, CommonNavigationProp } from '.';

export interface LoginProps {
  navigation: CommonNavigationProp;
  route: CommonRouteProp;
}

export interface LoginValues {
  username: string;
  password: string;
}

export interface SignUpButtonProps {
  children?: JSX.Element | string;
  device?: string;
  navigation: CommonNavigationProp;
}
