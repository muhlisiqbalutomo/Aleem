import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogoGetStarted} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogoGetStarted />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Adress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} align="left" />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.black,
    marginVertical: 40,
    maxWidth: 160,
  },
});
