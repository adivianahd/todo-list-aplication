import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Text from './Text';
import Input from './Input';

export default () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder={'Nueva tarea'}
        actionButton={addTodo}
      />
      <Card>
        <Text>{todo}</Text>
      </Card>
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
