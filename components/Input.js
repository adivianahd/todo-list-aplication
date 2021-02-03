import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from './utils';
import Card from './Card';
import Button from './Button';
import Text from './Text';

export default ({
  placeholder,
  actionButton
}) => {

  const [newTodo, setNewTodo] = useState({});

  const onSubmit = () => {
    actionButton(newTodo);
    setNewTodo('');
  };

  const onChange = (t) => {
    setNewTodo(t);
  };

  return (
    <Card style={styles.inputContent}>
      <TextInput
        value={newTodo}
        style={[styles.input]}
        placeholder={placeholder}
        onChangeText={t => onChange(t)}
      />
      <Button
        style={styles.buttonInput}
        action={onSubmit}
      >
        <Text style={styles.textButtonInput}>+</Text>
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  inputContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '90%',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 9,
  },
  buttonInput: {
    backgroundColor: colors.orange,
    height: 40,
    width: 40
  },
  textButtonInput: {
    color: colors.white,
  },
});
