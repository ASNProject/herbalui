import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MenuBar2 from './component/menubar_produk';
import Header_pencarian_produk from './component/header_pencarian_produk';
import Listproduk from './component/list_produk';
const ListProduk = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Header_pencarian_produk />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={style.scrollview}>
          <Listproduk />
        </ScrollView>
      </View>
      <MenuBar2 />
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
  scrollview: {
    marginHorizontal: 25,
  },
});

export default ListProduk;
