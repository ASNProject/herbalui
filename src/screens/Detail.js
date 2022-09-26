import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Deskripsi from './component/deskripsi';
import Slideshow from './component/slideshow';

const Detail = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView style={style.container}>
          <View style={style.body}>
            <Slideshow />
            <Deskripsi />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={style.beli}>
        <Text style={style.txt_beli}>Beli Sekarang</Text>
      </TouchableOpacity>
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
  beli: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0551FF',
    height: 40,
  },
  txt_beli: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
});
export default Detail;
