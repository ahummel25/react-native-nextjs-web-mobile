import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#f3f3f3'
  },
  text: {
    fontSize: 36,
    fontWeight: '600'
  }
});

const LayoutHeader: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native Web + Mobile!</Text>
    </View>
  );
};

export default LayoutHeader;
