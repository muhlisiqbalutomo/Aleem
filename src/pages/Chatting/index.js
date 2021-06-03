import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View>
      <Header type="dark-profile" title="Abdul Thalib" />
      <Text style={styles.chatDate}>Kamis, 3 Juni, 2021</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatDate: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.secondary.normal,
    color: colors.text.secondary,
  },
});
