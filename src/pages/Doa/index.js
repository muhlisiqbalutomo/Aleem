import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ILBGDoa,
  ILDoaBangunTidur,
  ILDoaPakaian,
  ILDoaToilet,
} from '../../assets/illustration';
import {ListDoa} from '../../components';
import {colors, fonts} from '../../utils';

const Doa = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBGDoa} style={styles.background}>
        <Text style={styles.title}>Do'a Harian</Text>
        <Text style={styles.desc}>Sudahkah berdoa hari ini?</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListDoa
          title="Do'a Bangun Tidur (3)"
          description="Shahih Tirmidzi: 3/144"
          pic={ILDoaBangunTidur}
        />
        <ListDoa
          title="Mendoakan Orang yang Mengenakan Pakaian Baru (1)"
          description="Muslim: 4/2083"
          pic={ILDoaPakaian}
        />
        <ListDoa
          title="Doa Masuk Toilet"
          description="Fathul Baari: 1/244"
          pic={ILDoaToilet}
        />
      </View>
    </View>
  );
};

export default Doa;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
  page: {
    backgroundColor: colors.bottom,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.primary[900],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: colors.bottom,
    textAlign: 'center',
    marginTop: 6,
  },
});
