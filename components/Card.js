import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, Unit } from './utils'


export default (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: Unit(1),
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 1.50,
    elevation: Unit(1),
  },
});
