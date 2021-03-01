import React, { FC, FormEvent, useRef } from 'react';
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData
} from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import styled from 'styled-components/native';
import * as Yup from 'yup';

import { ErrorProps, TextInputProps, TouchedProps } from '../interfaces';
import { LoginProps } from '../interfaces/login';
import { SignUpButtonProps } from '../interfaces/signup';
import { colors } from '../styles/colors';
import { doLogin } from '../queries';
import { userAuthApi } from '../utils/api';

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

const KeyboardAvoidingViewStyled = styled(({ ...rest }) => (
  <KeyboardAvoidingView {...rest} />
))`
  flex: 1;
  margin: auto;
  width: ${Platform.OS == 'web' ? '100%' : '75%'};
`;

const LoginFormView = styled.View`
  flex: 1;
  height: 2000px;
  text-align: center;
`;

const LogoText = styled.Text`
  font-size: 40px;
  font-weight: ${Platform.OS == 'android' ? 'bold' : '600'};
  margin-top: 150px;
  margin-bottom: 30px;
  text-align: center;
`;

const SignUpText = styled(
  ({ navigation, ...rest }: SignUpButtonProps): JSX.Element => {
    const router = useRouter();
    return (
      <>
        <Text
          accessibilityLabel="Go to sign up"
          accessibilityRole="link"
          onPress={(): void => {
            Platform.OS === 'web'
              ? router.push('/register')
              : navigation.navigate('Register');
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

const Login: FC<LoginProps> = ({ navigation }): JSX.Element => (
  <>
    <KeyboardAvoidingViewStyled
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <LoginFormView>
        <LogoText>Instamobile</LogoText>
        <Formik
          initialValues={initialLoginValues}
          onSubmit={async (values): Promise<void> => {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const graphql = JSON.stringify({
              query: doLogin,
              variables: {
                loginUserInput: {
                  username: values.username,
                  password: values.password
                }
              }
            });
            const requestOptions: RequestInit = {
              body: graphql,
              headers: myHeaders,
              method: 'POST',
              redirect: 'follow'
            };

            try {
              const response = await fetch(userAuthApi, requestOptions);

              const data = await response.json();
              console.log(data);
            } catch (err) {
              console.error('Error', err);
            }
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
                onSubmitEditing={(
                  event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
                ): void => {
                  handleSubmit(
                    (event as unknown) as FormEvent<HTMLFormElement>
                  );
                }}
                placeholder="Username"
                placeholderTextColor={colors.placeholderTextColor}
                touched={touched.username}
                value={values.username}
              />
              <TextLoginInputField
                error={errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                onSubmitEditing={(
                  event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
                ): void => {
                  handleSubmit(
                    (event as unknown) as FormEvent<HTMLFormElement>
                  );
                }}
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
          <SignUpText navigation={navigation}>Sign up here</SignUpText>.
        </Text>
      </LoginFormView>
    </KeyboardAvoidingViewStyled>
  </>
);

export default Login;
