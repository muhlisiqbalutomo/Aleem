import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUstadz2} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkProfile = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>Abdul Thalib</Text>
        <Text style={styles.desc}>Bab Tafsir</Text>
      </View>
      <Image source={DummyUstadz2} style={styles.avatar} />
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
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
  },
  desc: {
    fontFamily: fonts.secondary.normal,
    fontSize: 14,
    marginTop: 6,
    color: colors.text.secondary,
  },
  avatar: {
    width: 46,
    height: 46,
  },
});
