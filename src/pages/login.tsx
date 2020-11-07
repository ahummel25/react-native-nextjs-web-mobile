import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

import { DeviceProps } from '../interfaces';
import { colors } from '../styles/colors';

const LoginScreenContainer = styled.View<DeviceProps>`
  flex: 1;
  margin: auto;
  width: ${(props): string => (props.device === 'web' ? '35%' : '75%')};
`;

const KeyboardAvoidingViewStyled = styled(({ ...rest }) => (
  <KeyboardAvoidingView {...rest} />
))`
  flex: 1;
`;

const LoginFormView = styled.View`
  flex: 1;
  height: 2000px;
`;

const LogoText = styled.Text<DeviceProps>`
  font-size: 40px;
  font-weight: ${(props): string =>
    props.device === 'android' ? 'bold' : '600'};
  margin-top: 150px;
  margin-bottom: 30px;
  text-align: center;
`;

const TextInputUsername = styled(({ ...rest }) => <TextInput {...rest} />)`
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
  margin-top: 5px;
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

const styles = StyleSheet.create({
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
  }
});

const Login: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <KeyboardAvoidingViewStyled
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <LoginScreenContainer device={Platform.OS}>
        <LoginFormView>
          <LogoText device={Platform.OS}>Instamobile</LogoText>
          <TextInputUsername
            placeholder="Username"
            placeholderTextColor={colors.placeholderTextColor}
          />
          <TextInputUsername
            placeholder="Password"
            placeholderTextColor={colors.placeholderTextColor}
            secureTextEntry={true}
          />
          <Button buttonStyle={styles.loginButton} title="Login" />
          <Button
            buttonStyle={styles.fbLoginButton}
            titleStyle={{ color: colors.lightBlue }}
            title="Login with Facebook"
          />
        </LoginFormView>
      </LoginScreenContainer>
    </KeyboardAvoidingViewStyled>
  );
};

export default Login;
