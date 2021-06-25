import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUstadz2} from '../../assets';
import {Header, List} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';

const PilihUstadz = ({navigation, route}) => {
  const [listUstadz, setListUstadz] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    callUstadzByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callUstadzByCategory = category => {
    // Ustadz
    console.log('category: ', category);

    Fire.database()
      .ref('ustadz/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        console.log('data list ustadz: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListUstadz(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih Ustadz Bidang "${itemCategory.category}"`}
        onPress={() => navigation.goBack()}
      />
      {listUstadz.map(ustadz => {
        return (
          <List
            key={ustadz.id}
            type="next"
            profile={{uri: ustadz.data.photo}}
            name={ustadz.data.fullName}
            desc={ustadz.data.university}
            onPress={() => navigation.navigate('Chatting')}
          />
        );
      })}
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
