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

const RoutesContainer: FC<Record<string, unknown>> = (): JSX.Element => {
  const loginOptions = {
    headerTitle: ''
  };

  const signUpOptions = {
    headerTitle: ''
  };

  if (Platform.OS === 'android') {
    Object.assign(loginOptions, { headerStyle: { height: 80 } });
    Object.assign(signUpOptions, {
      headerBackTitleStyle: { bottom: 2 },
      headerStyle: { height: 100 }
    });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={({ route }): Record<string, unknown> => {
          const options = {};

          if (Platform.OS === 'android') {
            Object.assign(options, { headerBackTitleVisible: true });
          } else {
            Object.assign(options, {
              headerBackTitle: route.name === 'SignUp' ? 'Login' : ''
            });
          }

          return options;
        }}
      >
        <Stack.Screen name="Login" component={Login} options={loginOptions} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={signUpOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesContainer;
