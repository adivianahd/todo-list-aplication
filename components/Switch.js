import React from 'react';
import Container from './Container';
import SwitchSelector from 'react-native-switch-selector';

export default (props) => {

  return (
    <Container>
      <SwitchSelector 
      options={props.options} 
      initial={1} 
      onPress={() => console.log('esto trae el boton switch', props.options)}
      selectedColor={props.colors.white} //color de letras seleccionado
      buttonColor={props.colors.green} //color de boton del seleccionado
      animationDuration={250}
      hasPadding={true}
      backgroundColor={props.colors.blanco}
      />
    </Container>
  );
}

