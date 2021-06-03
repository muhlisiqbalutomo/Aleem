import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyUstadz2} from '../../assets';
import {Header, ListUstadz} from '../../components';
import {colors} from '../../utils';

const PilihUstadz = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Ustadz Tafsir" />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Bekasi"
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Lombok"
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Bandung"
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Lampung"
      />
      <ListUstadz
        type="next"
        profile={DummyUstadz2}
        name="Abdul Thalib"
        desc="Samarinda"
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
