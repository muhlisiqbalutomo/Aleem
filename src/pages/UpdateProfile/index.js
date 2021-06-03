import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemovePhoto />
          <Input label="Nama Lengkap" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            title="Save Profile"
            onPress={() => navigation.navigate('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 48,
  },
});
