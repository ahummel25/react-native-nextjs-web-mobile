import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import styled from 'styled-components/native';
import * as Yup from 'yup';

import { useWindowDimensions } from '../hooks';
import {
  ContainerProps,
  DeviceProps,
  ErrorProps,
  TextInputProps,
  TouchedProps
} from '../interfaces';
import { LoginProps } from '../interfaces/login';
import { SignUpButtonProps } from '../interfaces/signup';
import { colors } from '../styles/colors';
import { breakpoints as bp } from '../styles/variables';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const styles = StyleSheet.create({
  errorInput: {
    color: 'red',
    fontSize: 12,
    marginLeft: 16
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  loginButton: {
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    backgroundColor: colors.lightBlue
  },
  signUp: {
    textAlign: 'center'
  }
});

const LoginScreenContainer = styled.View<ContainerProps>`
  flex: 1;
  margin: auto;
  width: ${(props): string =>
    props.device === 'web' ? props.containerWidth : '75%'};
`;

const KeyboardAvoidingViewStyled = styled(({ ...rest }) => (
  <KeyboardAvoidingView {...rest} />
))`
  flex: 1;
`;

const LoginFormView = styled.View`
  flex: 1;
  height: 2000px;
  text-align: center;
`;

const LogoText = styled.Text<DeviceProps>`
  font-size: 40px;
  font-weight: ${(props): string =>
    props.device === 'android' ? 'bold' : '600'};
  margin-top: 150px;
  margin-bottom: 30px;
  text-align: center;
`;

const SignUpText = styled(
  ({ device, navigation, ...rest }: SignUpButtonProps): JSX.Element => {
    const router = useRouter();
    return (
      <>
        <Text
          accessibilityLabel="Go to sign up"
          accessibilityRole="link"
          onPress={(): void => {
            device === 'web'
              ? router.push('/sign-up')
              : navigation.navigate('SignUp');
          }}
          {...rest}
        />
      </>
    );
  }
)`
  color: ${colors.lightBlue};
`;

const TextLoginInputField = styled(
  ({
    touched,
    error,
    ...rest
  }: TextInputProps & TouchedProps & ErrorProps): JSX.Element => {
    const passwordInput = useRef<TextInput>(null);

    return (
      <>
        <TextInput
          accessible
          accessibilityLabel="textinput"
          ref={passwordInput}
          {...rest}
        />
        {touched && error ? (
          <Text style={styles.errorInput}>{error}</Text>
        ) : null}
      </>
    );
  }
)`
  font-size: 14px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${colors.whiteOne};
  background-color: ${colors.whiteTwo};
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

// const onFbLoginPress = async () => {
//   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
//     appId,
//     {
//       permissions: ['public_profile', 'email']
//     }
//   );
//   if (type === 'success') {
//     const response = await fetch(
//       `https://graph.facebook.com/me?access_token=${token}`
//     );
//     Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//   }
// };

// const appId = '1047121222092614';

const initialLoginValues = { username: '', password: '' };

const Login: FC<LoginProps> = ({ navigation }): JSX.Element => {
  const { width } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState<string>('');

  useEffect((): void => {
    if (Platform.OS !== 'web') {
      return;
    }
    // Set to 75% if rendered on a mobile browser, but not the native OS (android, iOS)
    if (width <= bp.md) {
      setContainerWidth('75%');
    } else {
      // Else 35% for desktop browser
      setContainerWidth('25%');
    }
  }, [width]);

  return (
    <>
      <KeyboardAvoidingViewStyled
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <LoginScreenContainer
          accessibilityLabel="Login Container"
          device={Platform.OS}
          containerWidth={containerWidth}
        >
          <LoginFormView>
            <LogoText device={Platform.OS}>Instamobile</LogoText>
            <Formik
              initialValues={initialLoginValues}
              onSubmit={async (values): Promise<void> => {
                console.log(values);
              }}
              validationSchema={loginSchema}
            >
              {({
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values
              }): JSX.Element => (
                <>
                  <TextLoginInputField
                    error={errors.username}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    placeholder="Username"
                    placeholderTextColor={colors.placeholderTextColor}
                    touched={touched.username}
                    value={values.username}
                  />
                  <TextLoginInputField
                    error={errors.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholder="Password"
                    placeholderTextColor={colors.placeholderTextColor}
                    secureTextEntry
                    touched={touched.password}
                    value={values.password}
                  />
                  <Button
                    buttonStyle={[styles.loginButton]}
                    onPress={(event: GestureResponderEvent): void => {
                      handleSubmit(
                        (event as unknown) as FormEvent<HTMLFormElement>
                      );
                    }}
                    title="Login"
                  />
                </>
              )}
            </Formik>
            <Button
              buttonStyle={[styles.fbLoginButton]}
              titleStyle={{ color: colors.lightBlue }}
              title="Login with Facebook"
            />
            <Text style={styles.signUp}>
              Don&apos;t have an account?{' '}
              <SignUpText device={Platform.OS} navigation={navigation}>
                Sign up here
              </SignUpText>
              .
            </Text>
          </LoginFormView>
        </LoginScreenContainer>
      </KeyboardAvoidingViewStyled>
    </>
  );
};

export default Login;
