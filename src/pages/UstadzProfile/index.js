import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const UstadzProfile = ({navigation, route}) => {
  const dataUstadz = route.params;

  return (
    <View style={styles.page}>
      <Header title="Ustadz Profile" onPress={() => navigation.goBack()} />
      <Profile
        photo={{uri: dataUstadz.data.photo}}
        name={dataUstadz.data.fullName}
        desc={dataUstadz.data.category}
      />
      <ProfileItem label="Alumnus" value={dataUstadz.data.university} />
      <ProfileItem
        label="Sertifikasi Bidang"
        value={dataUstadz.data.sertifikasi_bidang}
      />
      <ProfileItem
        label="No. Sertifikasi"
        value={dataUstadz.data.sertifikasi_number}
      />
      <View style={styles.btn}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataUstadz)}
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
