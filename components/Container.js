import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { colors, Unit } from './utils'
import Input from './Input';
import Text from './Text';
import List from './List';

export default () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  }

  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('../assets/toDoImg.png')}
      />
      <Input
        style={styles.input}
        placeholder={'Nueva tarea'}
        actionButton={addTodo}
      />
      {todo.length === 0 ? 
        <Text style={styles.text}>Sin tareas!</Text>
        :
        <FlatList
          keyExtractor={(_, i)=> i}
          data={todo}
          renderItem={({ item }) => <List >{item}</List>}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Unit(20),
  },
  image: {
    height: Unit(30),
    width: Unit(30)
  },
  text: {
    color: colors.green
  },

});
