import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {JSONDoaHarian} from '../../assets';
import {
  ILBGDoa,
  ILDoaBangunTidur,
  ILDoaPakaian,
  ILDOaRumah,
  ILDoaToilet,
  ILDoaWudhu,
} from '../../assets/illustration';
import {ListDoa} from '../../components';
import {colors, fonts} from '../../utils';

const Doa = ({navigation}) => {
  const picDoa = [
    ILDoaBangunTidur,
    ILDoaPakaian,
    ILDoaToilet,
    ILDoaWudhu,
    ILDOaRumah,
  ];
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBGDoa} style={styles.background}>
        <Text style={styles.title}>Do'a Harian</Text>
        <Text style={styles.desc}>Sudahkah berdoa hari ini?</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {JSONDoaHarian.data.map(item => {
            return (
              <ListDoa
                key={item.id}
                title={item.judul}
                pic={picDoa[item.idIcon]}
                onPress={() =>
                  navigation.navigate('DetailDoa', {
                    judul: item.judul,
                    arab: item.arab,
                    latin: item.latin,
                    arti: item.arti,
                    footnote: item.footnote,
                  })
                }
              />
            );
          })}
        </ScrollView>
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
    paddingTop: 0,
    paddingBottom: 0,
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
