import React, { FC } from 'react';
import { Platform } from 'react-native';
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
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
      screenOptions={({ route }): Record<string, unknown> => {
        const options = {
          headerBackTitle: route.name === 'SignUp' ? 'Login' : ''
        };

        if (Platform.OS == 'android') {
          Object.assign(options, { headerBackTitleVisible: true });
        }

        return options;
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: '' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RoutesContainer;
