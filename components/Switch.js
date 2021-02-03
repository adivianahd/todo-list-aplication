import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

export default (props) => {

  return (
    <View style={styles.switch}>
      <SwitchSelector 
      options={props.options} 
      initial={1} 
      onPress={props.onPress}
      selectedColor={props.colorTextSelected} 
      buttonColor={props.colorButtonSelected}
      borderColor={props.borderColor}
      animationDuration={250}
      hasPadding={true}
      borderRadius={5}
      backgroundColor={props.colorBackground}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    width: Dimensions.get('window').width - 50,
    margin: 15,
  }

});
