import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const ListDzikir = ({title, iconDzikir, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={iconDzikir} style={styles.icon} />
      <Gap height={30} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListDzikir;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.bottom,
    // alignSelf: 'flex-start'
    width: 170,
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 30,
  },
  icon: {
    width: 80,
    height: 80,
  },
  text: {
    fontFamily: fonts.primary[900],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    flex: 1,
  },
});
