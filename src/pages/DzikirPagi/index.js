import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {JSONDzikir} from '../../assets';
import {Header} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const DzikirPagi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Dzikir Pagi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {JSONDzikir.pagi.map(item => {
            return (
              <View key={item.id}>
                <Text style={styles.opening}>{item.opening}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
                <Text style={styles.arab1}>{item.arab1}</Text>
                <Text style={styles.arab2}>{item.arab2}</Text>
                <Text style={styles.latin}>{item.latin}</Text>
                <Text style={styles.arti}>{item.arti}</Text>
                <Text style={styles.faedah}>{item.faedah}</Text>
                <Text style={styles.closing}>{item.closing}</Text>
              </View>
            );
          })}
          <Text style={styles.text}>Sumber</Text>
          <Text style={styles.sumber}>
            https://arofta.id/dzikir-pagi-lengkap-sesuai-al-quran-dan-as-sunnah/
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DzikirPagi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  opening: {
    fontFamily: fonts.primary[700],
    fontSize: 17,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    marginBottom: 10,
    color: colors.secondary,
  },
  subTitle: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: colors.bubbleUser,
  },
  arab1: {
    fontFamily: fonts.primary[700],
    fontSize: 25,
    marginBottom: 10,
  },
  arab2: {
    fontFamily: fonts.primary[700],
    fontSize: 28,
    marginBottom: 10,
  },
  latin: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    marginBottom: 10,
    color: colors.text.secondary,
  },
  arti: {
    fontFamily: fonts.primary[700],
    fontSize: 17,
    marginBottom: 10,
  },
  faedah: {
    fontSize: 17,
    fontFamily: fonts.primary[700],
    color: colors.tafsir,
  },
  closing: {
    fontFamily: fonts.primary[700],
    fontSize: 17,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    marginBottom: 60,
    color: colors.bottom,
    textAlign: 'center',
  },
  sumber: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    marginBottom: 60,
    color: colors.primary,
    textAlign: 'center',
  },
});
