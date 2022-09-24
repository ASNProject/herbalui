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
import { Searchbar } from 'react-native-paper';
import { grey100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Header = () => {
  const [pencarian, setPencarian] = useState('');
  const onPencarian = query => setPencarian(query);

  return (
    <ImageBackground
      source={require('../images/header.png')}
      style={style.image}>
      <View style={style.header1}>
        <Text style={style.txt_herbalku}>herbalku</Text>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={style.txt_login}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.txt_cekkeluhanmu}>Cek keluhan mu disini</Text>
      <Searchbar
        style={style.searchbar}
        placeholder="pusing kepala"
        onChangeText={onPencarian}
        value={pencarian}
        fontSize={12}
        elevation={3}
        color={'#000000'}
      />
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  image: {
    width: 400,
    height: 150,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  header1: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 40,
  },
  txt_herbalku: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  txt_login: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    textAlignVertical: 'bottom',
  },
  txt_cekkeluhanmu: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 40,
    marginTop: 35,
    color: '#FFFFFF',
  },
  searchbar: {
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: '#fff',
  },
});

export default Header;
