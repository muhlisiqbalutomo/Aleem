import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({onPress, type, title, desc, photo}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile onPress={onPress} title={title} desc={desc} photo={photo} />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.bottom : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize',
  }),
});
