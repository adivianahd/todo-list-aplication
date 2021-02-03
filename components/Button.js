import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default ({
  style,
  action,
  children
}) => {
  return (
    <TouchableOpacity
      style={[styles.myButton, style]}
      onPress={() => action()}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myButton: {
    borderRadius: 50,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});