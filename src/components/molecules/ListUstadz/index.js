import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListUstadz = ({profile, name, desc, readChat}) => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastChat(readChat)}>{desc}</Text>
      </View>
    </View>
  );
};

export default ListUstadz;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bottom,
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  lastChat: readChat => ({
    fontSize: 12,
    fontFamily: readChat ? fonts.primary[700] : fonts.primary.normal,
    color: readChat ? colors.text.primary : colors.text.secondary,
  }),
});
