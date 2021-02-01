import React from 'react';
import { StyleSheet, View } from 'react-native';

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
    backgroundColor: '#ccf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
