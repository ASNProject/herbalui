import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MenuBar from './component/menubar';
import Header from './component/header_home';
import Produk from './component/produk_herbal';
import Artikel from './component/baca_artikel';
import Apoteker from './component/apoteker';

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style.scrollview}>
          <Produk />
          <Artikel />
          <Apoteker />
        </ScrollView>
      </View>
      <MenuBar />
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

export default App;
