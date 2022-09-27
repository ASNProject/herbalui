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
import Product from '../../../Product';

const ProdukLainnya = () => {
  const produklainnya = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk1.png?alt=media&token=16959b29-d502-4e13-afdb-887bbd483451',
      nama: 'The herbale x jasmine',
      harga: 'Rp. 150.000/botol',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk2.png?alt=media&token=32ba61d3-eae6-4547-8930-0490ba8724a4',
      nama: 'Yellow powder',
      harga: 'Rp. 65.000/pcs',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk3.png?alt=media&token=c9f99871-a9fd-4086-804a-85574d0144f0',
      nama: 'Masehat',
      harga: 'Rp. 20.000/box',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk4.png?alt=media&token=30f6cf53-8a1a-42ba-9127-8d31a805eb3b',
      nama: 'Healthy Jamu',
      harga: 'Rp. 22.000/botol',
    },
  ];

  return (
    <View style={style.container}>
      <View style={style.txt_header}></View>
      <Text style={style.txt_obatlainnya}>Obat lainnya</Text>
      <SafeAreaView>
        <FlatList
          numColumns={2}
          data={produklainnya}
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
  txt_obatlainnya: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginHorizontal: 20,
    color: 'black',
  },
});
export default ProdukLainnya;
