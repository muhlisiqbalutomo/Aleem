import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ILBabAkidah,
  ILBabFiqih,
  ILBabHadits,
  ILBabSejarahIslam,
  ILBabTafsir,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BabKonsultasi = ({topic, color, onPress}) => {
  const Icon = () => {
    switch (topic) {
      case 'Aqidah':
        return <ILBabAkidah style={styles.illustration} />;

      case 'Tafsir':
        return <ILBabTafsir style={styles.illustration} />;

      case 'Hadits':
        return <ILBabHadits style={styles.illustration} />;

      case 'Fiqih':
        return <ILBabFiqih style={styles.illustration} />;

      case 'Sejarah Islam':
        return <ILBabSejarahIslam style={styles.illustration} />;

      default:
        break;
    }
  };
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>{topic}</Text>
    </TouchableOpacity>
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
    fontSize: 18,
    fontFamily: fonts.primary[900],
    color: colors.white,
    textAlign: 'center',
    maxWidth: '60%',
  },
});
