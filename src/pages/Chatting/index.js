import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';

const Chatting = () => {
  return (
    <View>
      <Header type="dark" title="Abdul Thalib" />
      <Text>Chatting Screen</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({});
