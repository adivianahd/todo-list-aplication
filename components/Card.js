import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderRadius: 10,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 1.50,
    elevation: 5,
  },
});
