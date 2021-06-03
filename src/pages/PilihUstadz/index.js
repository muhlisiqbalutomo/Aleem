import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUstadz2} from '../../assets';
import {Header, ListUstadz} from '../../components';
import {colors} from '../../utils';

const PilihUstadz = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Ustadz Tafsir"
        onPress={() => navigation.goBack()}
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Bekasi"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Lombok"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Bandung"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Lampung"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Samarinda"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default PilihUstadz;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
