import React from 'react';
import Container from './components/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from './components/Text';

export default function App() {
  return (
    <Container>
      <Text>holaaa
        <Icon name="rocket" size={80} color="purple" />
      </Text>
    </Container>

  );
}
