import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { colors, Unit } from './utils';
import Card from './Card';
import Text from './Text';
import Button from './Button';
import Icon from './Icon';

export default ({
  children,
  style,
  data,
  action
}) => {
  const onSubmit = () => {
    action('done');
  }

  const toDelete = () => {
    action('deleted')
  }

  const statusStyle = {
    "done": styles.cardDone,
    "deleted": styles.cardDeleted
  }[data.stateTodo];
  return (

    <Card style={[styles.cardList, style, statusStyle]}>
      <Text style={styles.text}>{children}</Text>
      {data.stateTodo === "todo" &&
        <>
          <Button
            style={styles.buttonDone}
            action={onSubmit}
          >
            <Icon color={colors.white} name={'check'} size={Unit(3)} />
          </Button>
          <Button
            style={styles.buttonDelete}
            action={toDelete}
          >
            <Icon color={colors.white} name={'remove'} size={Unit(3)} />
          </Button>
        </>
      }
    </Card>
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Unit(2),
    padding: Unit(2),
    height: '100%',
    width: Dimensions.get('window').width - 50,
    borderColor: colors.yellow,
    borderLeftWidth: Unit(1)
  },
  cardDone: {
    minHeight: 80,
    borderColor: colors.green,
  },
  cardDeleted: {
    minHeight: 80,
    borderColor: colors.red,
  },
  text: {
    flex: 2,
    textAlign: 'left',
  },
  buttonDone: {
    flex: .30,
    backgroundColor: colors.green,
    height: Unit(8),
    width: Unit(8),
    margin: Unit(2)
  },
  buttonDelete: {
    flex: .30,
    backgroundColor: colors.red,
    height: Unit(8),
    width: Unit(8)
  },
});
