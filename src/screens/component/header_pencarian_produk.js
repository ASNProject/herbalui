import { color } from '@rneui/base';
import React, { Component, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SearchBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header_pencarian_produk = () => {
  const [pencarian, setPencarian] = useState('');
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Icon
          style={{ textAlignVertical: 'center', padding: 10 }}
          name="search1"
          size={20}
          color="a0a0a0"></Icon>
        <TextInput
          style={style.pencarian}
          placeholder="Cari produk"
          onChangeText={pencarian => setPencarian(pencarian)}></TextInput>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
  },
  body: {
    flexDirection: 'row',
    marginHorizontal: 25,
    backgroundColor: '#F1F1F1',
    height: 40,
  },
});

export default Header_pencarian_produk;
