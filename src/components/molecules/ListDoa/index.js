import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDoaBangunTidur} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoa = () => {
  return (
    <View style={styles.container}>
      <ILDoaBangunTidur />
      <View style={styles.wrapperText}>
        <Text style={styles.title}>Do'a Bangun Tidur (1)</Text>
        <Text style={styles.desc}>Muslim: 4/2083</Text>
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
  wrapperText: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[800],
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
