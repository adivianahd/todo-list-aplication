import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, Unit } from './utils'


export default (props) => {
  return (
    <Text style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    textAlign: 'center',
    fontSize: Unit(4),
  },
});
