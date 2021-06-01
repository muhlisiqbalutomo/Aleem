import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILLogoGetStarted, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogoGetStarted />
        <Text style={styles.title}>
          Konsultasi syariah jadi lebih mudah & amanah
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: '#6776ED',
    marginTop: 100,
    fontFamily: 'Nunito-SemiBold',
  },
});
