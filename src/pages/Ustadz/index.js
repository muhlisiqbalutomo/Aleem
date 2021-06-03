import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {BabKonsultasi, NewsItem, RatedUstadz} from '../../components/molecules';
import HomeProfile from '../../components/molecules/HomeProfile';
import {colors, fonts} from '../../utils';
import {JSONTopikKonsultasi} from '../../assets';

const Ustadz = ({navigation}) => {
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
              <View style={styles.konsultasi}>
                <Gap width={32} />
                {JSONTopikKonsultasi.data.map(item => {
                  return (
                    <BabKonsultasi
                      key={item.id}
                      topic={item.topic}
                      color={colors.fiqih} //warning: coba pake cara inline atau state agar color bisa sesuai
                      onPress={() => navigation.navigate('PilihUstadz')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Ustadz</Text>
            <RatedUstadz />
            <RatedUstadz />
            <RatedUstadz />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
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
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  konsultasi: {
    flexDirection: 'row',
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
