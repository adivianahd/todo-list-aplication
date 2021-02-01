import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default (props) => {
  return (
    <Text style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
  },
});
