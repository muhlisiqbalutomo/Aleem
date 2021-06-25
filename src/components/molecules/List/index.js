import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconEditProfile,
  IconHelpCenter,
  IconLanguage,
  IconNext,
  IconRateApp,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({profile, name, desc, type, onPress, icon, readChat}) => {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <IconEditProfile />;
      case 'language':
        return <IconLanguage />;
      case 'rate-app':
        return <IconRateApp />;
      case 'help-center':
        return <IconHelpCenter />;

      default:
        break;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.wrapperText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastChat(readChat)}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bottom,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  wrapperText: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  lastChat: readChat => ({
    fontSize: 12,
    fontFamily: readChat ? fonts.primary[700] : fonts.primary.normal,
    color: readChat ? colors.text.primary : colors.text.secondary,
    textTransform: 'capitalize',
  }),
});
