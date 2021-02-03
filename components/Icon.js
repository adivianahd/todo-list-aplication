import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({
  color,
  name,
  size
}) => {
  return (
    <Text>
      <Icon name={name} size={size} color={color} />
    </Text>
  );
}
