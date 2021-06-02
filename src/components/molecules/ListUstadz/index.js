import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUstadz1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListUstadz = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUstadz1} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Ameer Thalib</Text>
        <Text style={styles.lastChat}>
          Baik pak ustadz, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
};

export default ListUstadz;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bottom,
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  lastChat: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
