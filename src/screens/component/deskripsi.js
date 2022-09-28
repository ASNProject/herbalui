import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Deskripsi = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text style={style.judul}>Jasmine tea</Text>
        <Text style={style.harga}>Rp. 20.000/pack</Text>
      </View>
      <View style={style.body2}>
        <Text style={style.txt_deskripsi}>Deskripsi</Text>
        <View style={style.isi}>
          <Text style={style.txt_isi}>Penyakit berkaitan</Text>
          <Text style={style.txt_isi2}>Batuk, Pilek, Panas dalam</Text>
        </View>
        <View style={style.isi}>
          <Text style={style.txt_isi}>Cara penggunaan</Text>
          <Text style={style.txt_isi2}>Diminum setelah makan siang</Text>
        </View>
        <View style={style.line}></View>
        <Text style={style.txt_isi}>
          Lorem ipsum ini adalah deskripsi obatnya ya
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    padding: 10,
  },
  body2: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
  judul: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: 'black',
  },
  harga: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 12,
  },
  txt_deskripsi: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: 'black',
    marginBottom: 5,
  },
  isi: {
    flexDirection: 'row',
    marginTop: 5,
  },
  txt_isi: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
  },
  txt_isi2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
    marginStart: 25,
  },
  line: {
    flex: 1,
    height: 1,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default Deskripsi;
