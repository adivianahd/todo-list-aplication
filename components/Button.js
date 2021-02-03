import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Unit } from './utils'


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
    borderRadius: Unit(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});