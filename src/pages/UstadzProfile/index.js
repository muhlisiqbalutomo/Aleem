import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const UstadzProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Ustadz Profile" onPress={() => navigation.goBack()} />
      <Profile name="Ameer Thalib" desc="Tafsir" />
      <ProfileItem label="Kelahiran" value="Kebumen" />
      <ProfileItem label="S1 Alumnus" value="Al-Azhar Cairo, 2015" />
      <ProfileItem label="S2 Alumnus" value="Madinah University, 2017" />
      <View style={styles.btn}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default UstadzProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  btn: {
    padding: 40,
    paddingTop: 20,
  },
});
