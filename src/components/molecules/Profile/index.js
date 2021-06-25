import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, isRemovePhoto, photo, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemovePhoto && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.avatar} />
          {isRemovePhoto && <IconRemovePhoto style={styles.removePhoto} />}
        </View>
      )}
      {isRemovePhoto && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemovePhoto && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View style={styles.wrapperText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  borderProfile: {
    borderWidth: 0.2,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  removePhoto: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
  wrapperText: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
