import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, DummyUstadz3} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={30} />
      <Profile />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="rate-app"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="help-center"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
