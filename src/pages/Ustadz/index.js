import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BabKonsultasi, NewsItem, RatedUstadz} from '../../components/molecules';
import HomeProfile from '../../components/molecules/HomeProfile';

const Ustadz = () => {
  return (
    <View>
      <HomeProfile />
      <Text>Assalamualaikum, mau konsultasi apa hari ini?</Text>
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

const styles = StyleSheet.create({});
