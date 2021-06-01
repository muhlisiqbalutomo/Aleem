import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
