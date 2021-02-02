import React from 'react';
import Container from './components/Container';
import SwitchSelector from 'react-native-switch-selector';

export default function App() {

  const options = [
    { label: '01:00', value: '1' },
    { label: '01:30', value: '1.5' },
    { label: '02:00', value: '2' }
];

const colors = {
   rojo: '#f00',
   blanco: '#fff', 
   negro: '#000',
};

  return (
    <Container>
      <SwitchSelector 
      options={options} 
      initial={1} 
      onPress={value => console.log('esto trae la mierda esta', value)}
      selectedColor={colors.rojo}
      buttonColor={colors.negro}
      borderColor={colors.rojo}
      />
    </Container>
  );
}
