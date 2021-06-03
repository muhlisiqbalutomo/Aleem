import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListDoa = ({title, pic, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={pic} style={styles.img} />
      <View style={styles.wrapperText}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListDoa;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bottom,
    padding: 16,
  },
  img: {
    height: 78,
    width: 90,
  },
  wrapperText: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[900],
    color: colors.bottom,
    textAlign: 'center',
  },
});
