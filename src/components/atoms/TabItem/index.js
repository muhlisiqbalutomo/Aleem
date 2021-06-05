import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconMessages,
  IconMessagesActive,
  IconDoa,
  IconDoaActive,
  IconUstadz,
  IconHomeActive,
  IconHome,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === "Do'a Harian") {
      return active ? <IconDoaActive /> : <IconDoa />;
    }
    return <IconUstadz />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[800],
    marginTop: 4,
  }),
});
