import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import backgroundImg from '../assets/todoApi.png';

export default (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.image}>
      {props.children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: .8,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
