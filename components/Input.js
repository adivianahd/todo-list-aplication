import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert, Dimensions } from 'react-native';
import { colors, Unit } from './utils'
import Card from './Card';
import Button from './Button';
import Icon from './Icon';

export default ({
  style,
  placeholder,
  actionButton
}) => {

  const [newTodo, setNewTodo] = useState('');

  const alertAction = () => Alert.alert(
    'Alto!',
    'No puedes agregar una tarea vacia!',
    [
      {
        text: 'aceptar',
        onPress: ()=>{},
        style: 'cancel'
      }
    ],
    {cancelable: false}
  )

  const onSubmit = () => {
    if (!newTodo) {
     return alertAction();
    }
    actionButton(newTodo);
    setNewTodo('');
  };

  const onChange = (t) => {
    setNewTodo(t);
  };

  return (
    <Card style={[styles.inputContent, style]}>
      <TextInput
        value={newTodo}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={t => onChange(t)}
      />
      <Button
        style={styles.buttonInput}
        action={onSubmit}
      >
        <Icon color={colors.white} name={'plus'} size={Unit(3)} />
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  inputContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Unit(2),
    height: Unit(15),
    width: Dimensions.get('window').width - 50,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: Unit(1),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  buttonInput: {
    backgroundColor: colors.yellow,
    height: Unit(8),
    width: Unit(8)
  },
});
