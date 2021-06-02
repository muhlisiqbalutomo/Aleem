import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILBabAkidah} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BabKonsultasi = () => {
  return (
    <View style={styles.container}>
      <ILBabAkidah style={styles.illustration} />
      <Text style={styles.label}>Akidah</Text>
    </View>
  );
};

export default BabKonsultasi;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.secondary,
    // alignSelf: 'flex-start',
    width: 170,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  illustration: {
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[800],
    color: colors.white,
    textAlign: 'center',
  },
});
