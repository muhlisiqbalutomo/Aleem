import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyUstadz1, DummyUstadz2, DummyUstadz3} from '../../assets';
import {List} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
  const [ustadz] = useState([
    {
      id: 1,
      profile: DummyUstadz2,
      name: 'Ameer Thalib',
      desc: 'Oke menurut pak dokter bagaimana unt...',
      readChat: false,
    },
    {
      id: 2,
      profile: DummyUstadz1,
      name: 'Fatih Rizal',
      desc: 'Oh tentu saja tidak karena perilaku it...',
      // property dibawah tambahan, just improve;)
      readChat: true,
    },
    {
      id: 3,
      profile: DummyUstadz3,
      name: 'Zabit Bahar',
      desc: 'Baik pak ustadz, terima kasih banyak atas wakt...',
      readChat: false,
    },
  ]);

  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user.uid}/`;
    Fire.database()
      .ref(urlHistory)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              ...oldData[key], // tanpa menggunakan objek data
            });
          });
          console.log('new data history: ', data);
          setHistoryChat(data);
        }
      });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          return (
            <List
              key={chat.id}
              profile={chat.uidPartner}
              name={chat.uidPartner}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bottom,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
