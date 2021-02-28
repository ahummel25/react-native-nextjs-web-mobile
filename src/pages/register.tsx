import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Register: FC<Record<string, unknown>> = (): JSX.Element => (
  <Container>
    <Text>Sign Up Page Coming Soon!</Text>
  </Container>
);

export default Register;
