import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header} from '../../components';
import {colors, fonts} from '../../utils';

const DetailDoa = ({route, navigation}) => {
  const {judul, arab, latin, arti, footnote} = route.params;
  const judulDoa = JSON.stringify(judul);
  const arabDoa = JSON.stringify(arab);
  const latinDoa = JSON.stringify(latin);
  const artiDoa = JSON.stringify(arti);
  return (
    <View style={styles.page}>
      <Header title="Detail Doa" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.judul}>{JSON.parse(judulDoa)}</Text>
          <Text style={styles.arab}>{JSON.parse(arabDoa)}</Text>
          <Text style={styles.latin}>{JSON.parse(latinDoa)}</Text>
          <Text style={styles.arti}>{JSON.parse(artiDoa)}</Text>
          <Text style={styles.footnote}>{JSON.stringify(footnote)}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailDoa;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  judul: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 50,
  },
  arab: {
    fontFamily: fonts.primary[800],
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
  },
  latin: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.tafsir,
    textAlign: 'left',
    marginBottom: 20,
  },
  arti: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  footnote: {
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 50,
  },
});
