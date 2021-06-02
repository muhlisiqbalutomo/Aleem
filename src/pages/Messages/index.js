import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyUstadz1, DummyUstadz2, DummyUstadz3} from '../../assets';
import {ListUstadz} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [konsulUstadz] = useState([
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
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {konsulUstadz.map(ustadz => {
          return (
            <ListUstadz
              key={ustadz.id}
              profile={ustadz.profile}
              name={ustadz.name}
              desc={ustadz.desc}
              readChat={ustadz.readChat}
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
