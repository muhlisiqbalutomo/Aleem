import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {BabKonsultasi, NewsItem, RatedUstadz} from '../../components/molecules';
import HomeProfile from '../../components/molecules/HomeProfile';
import {colors, fonts} from '../../utils';

const Ustadz = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <HomeProfile />
            <Text style={styles.welcome}>
              Assalamualaikum, {'\n'}konsultasi apa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.konsultasi}>
                <Gap width={32} />
                <BabKonsultasi />
                <BabKonsultasi />
                <BabKonsultasi />
                <BabKonsultasi />
                <BabKonsultasi />
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
        </View>
      </ScrollView>
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
    paddingVertical: 30,
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
