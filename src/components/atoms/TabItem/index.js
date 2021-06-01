import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconMessages,
  IconMessagesActive,
  IconQA,
  IconQAActive,
  IconUstadz,
  IconUstadzActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Ustadz') {
      return active ? <IconUstadzActive /> : <IconUstadz />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'QA') {
      return active ? <IconQAActive /> : <IconQA />;
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
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
