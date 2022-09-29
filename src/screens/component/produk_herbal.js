import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import Product from '../../../Product';
import { useNavigation } from '@react-navigation/native';

const Produk = () => {
  const Img =
    'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk1.png?alt=media&token=16959b29-d502-4e13-afdb-887bbd483451';
  const Img2 =
    'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk2.png?alt=media&token=32ba61d3-eae6-4547-8930-0490ba8724a4';
  const Img3 =
    'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk3.png?alt=media&token=c9f99871-a9fd-4086-804a-85574d0144f0';
  const Img4 =
    'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk4.png?alt=media&token=30f6cf53-8a1a-42ba-9127-8d31a805eb3b';
  const Img5 =
    'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk5.png?alt=media&token=3aaa38f7-2942-409f-b822-e70705a00172';
  const Img6 =
    'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk6.png?alt=media&token=e9788ffc-db48-4ece-bd53-892bbffe9cdb';

  const produk = [
    { img: Img, nama: 'The herbale x jasmine', harga: 'Rp. 150.000/botol' },
    { img: Img2, nama: 'Yellow powder', harga: 'Rp. 65.000/pcs' },
    { img: Img3, nama: 'Masehat', harga: 'Rp. 20.000/box' },
    { img: Img4, nama: 'Healthy Jamu', harga: 'Rp. 22.000/botol' },
    { img: Img5, nama: 'Very good tea', harga: 'Rp. 20.000/box' },
    { img: Img6, nama: 'Healthy Jamu', harga: 'Rp. 22.000/botol' },
  ];
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.txt_header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.txt_produk}>Produk Herbal</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('ListProduk')}>
              <Text style={style.txt_lihatsemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SafeAreaView>
        <FlatList
          numColumns={2}
          data={produk}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Product produks={item} />}></FlatList>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  txt_header: {
    marginTop: 20,
    flex: 1,
  },
  txt_produk: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
    elevation: 3,
  },
  txt_lihatsemua: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    color: '#0551FF',
    elevation: 3,
  },
});

export default Produk;
