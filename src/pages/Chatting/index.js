import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataUstadz = route.params;
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        desc={dataUstadz.data.category}
        title={dataUstadz.data.fullName}
        onPress={() => navigation.goBack()}
        photo={{uri: dataUstadz.data.photo}}
      />
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.chatDate}>Kamis, 3 Juni, 2021</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value={'1'}
        onChangeText={() => alert('input tap')}
        onButtonPress={() => alert('Button Press')}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
