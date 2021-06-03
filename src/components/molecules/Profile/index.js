import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Muhlis Iqbal Utomo</Text>
      <Text style={styles.profession}>CEO & Founder at iqbalworks</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  borderProfile: {
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
