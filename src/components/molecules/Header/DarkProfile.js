import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUstadz2} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bottom,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperText: {
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 20,
    color: colors.white,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    marginTop: 6,
    color: colors.text.secondary,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
