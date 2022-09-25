import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StackNavigator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const MenuBar2 = () => {
  const navigation = useNavigation();
  return (
    <View style={style.menubar}>
      <View style={style.vtouch1}>
        <TouchableOpacity
          style={style.touch}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#0074DF" />
          <Text style={style.text1}>Beranda</Text>
        </TouchableOpacity>
      </View>
      <View style={style.vtouch2}>
        <TouchableOpacity
          style={style.touch}
          onPress={() => navigation.navigate('ListProduk')}>
          <Icon name="bars" size={24} color="#FFFFFF" />
          <Text style={style.text2}>Produk</Text>
        </TouchableOpacity>
      </View>
      <View style={style.vtouch3}>
        <TouchableOpacity style={style.touch}>
          <Icon name="message1" size={24} color="#0074DF" />
          <Text style={style.text3}>Konsultasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  menubar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 20,
    marginHorizontal: 50,
    marginBottom: 20,
    height: 45,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vtouch1: {
    flex: 1,
    // backgroundColor: '#0074DF',
    //borderRadius: 20,
  },
  vtouch2: {
    flex: 1,
    backgroundColor: '#0074DF',
    borderRadius: 20,
  },
  vtouch3: {
    flex: 1,
    //backgroundColor: '#0074DF',
    //borderRadius: 20
  },
  text1: {
    fontSize: 10,
    //color: "#FFFFFF"
  },
  text2: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  text3: {
    fontSize: 10,
    //color: "#FFFFFF"
  },
});

export default MenuBar2;
