import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import backgroundImg from '../assets/todoApi.png';

export default (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
