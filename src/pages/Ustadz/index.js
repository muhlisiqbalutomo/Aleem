import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BabKonsultasi, NewsItem, RatedUstadz} from '../../components/molecules';
import HomeProfile from '../../components/molecules/HomeProfile';
import {colors, fonts} from '../../utils';

const Ustadz = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>
        Assalamualaikum, {'\n'}konsultasi apa hari ini?
      </Text>
      <BabKonsultasi />
      <BabKonsultasi />
      <BabKonsultasi />
      <BabKonsultasi />
      <BabKonsultasi />
      <Text>Top Rated Ustadz</Text>
      <RatedUstadz />
      <RatedUstadz />
      <RatedUstadz />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Ustadz;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
