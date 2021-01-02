import React, { FC } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import SignUp from '../pages/sign-up';
import { colors } from '../styles/colors';

export type RootStackList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackList>();

const RoutesContainer: FC<Record<string, unknown>> = (): JSX.Element => {
  const loginOptions = {
    headerTitle: ''
  };

  const commonOptions = {
    headerTitle: 'Sign Up',
    headerTitleStyle: { color: colors.lightBlue }
  };

  if (Platform.OS === 'android') {
    Object.assign(loginOptions, { headerStyle: { height: 80 } });
    Object.assign(commonOptions, {
      headerTitleStyle: {
        ...commonOptions.headerTitleStyle,
        marginBottom: 10
      },
      headerStyle: { height: 100 }
    });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={({ route, navigation }): Record<string, unknown> => {
          const options = {
            headerBackTitleVisible: false,
            headerTitleAlign: 'center'
          };

          if (route.name === 'SignUp') {
            Object.assign(options, {
              // eslint-disable-next-line react/display-name
              headerLeft: (): JSX.Element => (
                <TouchableOpacity
                  onPress={(): void => {
                    if ('navigate' in navigation) {
                      navigation.navigate('Login');
                    } else {
                      console.debug('navigate not found on navigation!', {
                        navigation
                      });
                    }
                  }}
                >
                  <Image
                    source={require('../../assets/images/back.png')}
                    fadeDuration={0}
                    style={{
                      marginBottom: Platform.OS === 'android' ? 10 : 0,
                      marginLeft: 10,
                      width: 20,
                      height: 20,
                      tintColor: colors.lightBlue
                    }}
                  />
                </TouchableOpacity>
              )
            });
          }

          return options;
        }}
      >
        <Stack.Screen name="Login" component={Login} options={loginOptions} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={commonOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesContainer;
