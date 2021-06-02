import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ILBabAkidah,
  ILBabFiqih,
  ILBabHadits,
  ILBabSejarahIslam,
  ILBabTafsir,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BabKonsultasi = ({topic, color}) => {
  const Icon = () => {
    switch (topic) {
      case 'AKIDAH':
        return <ILBabAkidah style={styles.illustration} />;

      case 'TAFSIR':
        return <ILBabTafsir style={styles.illustration} />;

      case 'HADITS':
        return <ILBabHadits style={styles.illustration} />;

      case 'FIQIH':
        return <ILBabFiqih style={styles.illustration} />;

      case 'SEJARAH ISLAM':
        return <ILBabSejarahIslam style={styles.illustration} />;

      default:
        break;
    }
  };
  return (
    <View style={styles.container(color)}>
      <Icon />
      <Text style={styles.label}>{topic}</Text>
    </View>
  );
};

export default BabKonsultasi;

const styles = StyleSheet.create({
  container: color => ({
    padding: 12,
    backgroundColor: color,
    // alignSelf: 'flex-start'
    width: 170,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  illustration: {
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[800],
    color: colors.white,
    textAlign: 'center',
    maxWidth: '60%',
  },
});
