import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  SectionList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import ArtikelLainnya from './component/artikel_lainnya';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Artikel = () => {
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.wrap}>
          <View style={style.body}>
            <ImageBackground
              style={style.img}
              source={{
                uri: 'https://picsum.photos/id/1/200',
              }}
              resizeMode="stretch"></ImageBackground>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              top: 10,
              marginHorizontal: 10,
            }}>
            <Icon name="arrow-left" size={40} style={{ color: 'black' }} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                flex: 1,
              }}>
              <Icon name="star" size={30} color={'yellow'} />
            </View>
          </View>
        </View>
        <View style={style.body}>
          <Text style={style.judul}>
            Tips hidup sehat terhindar dari Covid 19
          </Text>
          <Text style={style.pubilkasi}>
            Dipublikasikan pada 24 September 2022
          </Text>
          <Text style={style.isi}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet eros eget ipsum tempus dictum. Aliquam quis rhoncus orci,
            at bibendum elit. In eget odio luctus purus tincidunt pulvinar.
            Curabitur id tortor at lorem sodales fringilla. Donec augue sem,
            rutrum in urna quis, consequat porttitor tellus. Nulla ac
            condimentum lorem. Sed ultricies feugiat ex. Cras mollis justo quis
            ante vulputate, eu tristique enim commodo. Sed pretium vitae augue
            eu pulvinar. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Etiam id diam lectus. Sed tempor
            augue augue, sed tristique neque porta ac. Suspendisse posuere
            gravida nisi, at condimentum arcu dictum venenatis. Nam rhoncus
            metus at turpis tempus dapibus. Aliquam suscipit placerat diam, vel
            posuere elit posuere quis. Proin id sem ut odio lobortis suscipit et
            eu dui. Vivamus at eros elementum, tristique felis et, commodo
            velit. Sed quis nunc vel dolor maximus condimentum. Etiam porta
            faucibus scelerisque. Sed facilisis velit a ex convallis, quis
            placerat lorem ullamcorper. Proin elementum eros erat, a commodo
            lorem varius vel. Nulla sit amet cursus risus. Praesent accumsan et
            mi vitae pretium.
          </Text>
        </View>
        <View style={style.line}></View>
        <ArtikelLainnya />
      </ScrollView>
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
  img: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  judul: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginHorizontal: 16,
    marginTop: 20,
    color: 'black',
  },
  pubilkasi: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginHorizontal: 16,
    marginTop: 20,
    color: 'black',
  },
  isi: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginHorizontal: 16,
    marginTop: 20,
    color: 'black',
    marginBottom: 20,
    textAlign: 'justify',
  },
  line: {
    flex: 1,
    height: 1,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});

export default Artikel;
