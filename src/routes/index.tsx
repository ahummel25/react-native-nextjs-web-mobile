import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import SignUp from '../pages/signup';

export type RootStackList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackList>();

const RoutesContainer: FC<Record<string, unknown>> = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RoutesContainer;
