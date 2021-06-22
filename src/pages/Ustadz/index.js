import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILSunrise, ILSunset, JSONTopikKonsultasi} from '../../assets';
import {Gap} from '../../components/atoms';
import {BabKonsultasi, ListDzikir} from '../../components/molecules';
import HomeProfile from '../../components/molecules/HomeProfile';
import {colors, fonts, getData} from '../../utils';

const Ustadz = ({navigation}) => {
  const bgKonsulColor = [
    colors.akidah,
    colors.tafsir,
    colors.hadits,
    colors.fiqih,
    colors.sejarahIslam,
  ];
  useEffect(() => {
    getData('user').then(res => {
      console.log('data user: ', res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Assalamualaikum, {'\n'}konsultasi apa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.row}>
                <Gap width={32} />
                {JSONTopikKonsultasi.data.map(item => {
                  return (
                    <BabKonsultasi
                      key={item.id}
                      topic={item.topic}
                      color={bgKonsulColor[item.id + -1]} //nice improve
                      onPress={() => navigation.navigate('PilihUstadz')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperDzikir}>
            <Text style={styles.sectionLabel}>Dzikir</Text>
            <View style={styles.row}>
              <ListDzikir
                title="Pagi"
                iconDzikir={ILSunrise}
                onPress={() => navigation.navigate('DzikirPagi')}
              />
              <Gap width={20} />
              <ListDzikir
                title="Petang"
                iconDzikir={ILSunset}
                onPress={() => navigation.navigate('DzikirPetang')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Ustadz;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bottom,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  row: {
    flexDirection: 'row',
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  wrapperDzikir: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 20,
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
