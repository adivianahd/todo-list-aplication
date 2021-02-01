import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default (props) => {

  return (
    <TextInput
      style={[styles.input, props.styles]}
      placeholder={props.placeholder}
      onChangeText={t => props.action(t)}
      defaultValue={''}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 9,
  },
});
