import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { colors, Unit } from './utils'
import Input from './Input';
import Switch from './Switch';
import Text from './Text';
import List from './List';

export default () => {

  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filterTodo, setFilterTodo] = useState('todo');

  const addTodo = (newTodo) => {
    setCounter(counter + 1);
    const todoObjet = {
      counter: counter,
      todo: newTodo,
      stateTodo: 'todo'
    }

    setTodo([...todo, todoObjet]);
  }

  const onAction = (item) => action => {
    const index = todo.indexOf(item);
    if(index === -1) return;

    todo[index].stateTodo = action;
    setTodo([...todo]);
  }

  const options = [
    { label: 'Deleted', value: 'deleted' },
    { label: 'To do', value: 'todo' },
    { label: 'Done', value: 'done' },
    { label: 'All', value: 'all' }
  ];

  const filter = todo.filter(item => item.stateTodo === filterTodo || "all" === filterTodo)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/toDoImg.png')}
      />
      <Input
        style={styles.input}
        placeholder={'New to do'}
        actionButton={addTodo}
      />
      {todo.length === 0 ?
        <Text style={styles.text}>No homework for now!</Text>
        :
        <>
          <Switch 
          options={options}
          onPress={setFilterTodo}
          colorTextSelected={colors.white} 
          colorButtonSelected={colors.green} 
          colorBackground={colors.white}
          borderColor={colors.green} />
          <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={filter}
            renderItem={({ item }) => <List data={item} action={onAction(item)}>{item.todo}</List>}
          />
        </>
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
    width: Unit(30),
    marginBottom: Unit(8),
  },
  text: {
    color: colors.green
  },

});
