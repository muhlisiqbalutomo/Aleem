import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListDoa = ({title, description, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.img} />
      <View style={styles.wrapperText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
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
    fontFamily: fonts.primary[800],
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
