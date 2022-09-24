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
  SectionList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ListItem = ({ item }) => {
  return (
    <View style={style.item}>
      <Image
        source={{ uri: item.uri }}
        style={style.imagestyle}
        resizeMode="cover"></Image>
      <Text style={style.itemText}>{item.text}</Text>
    </View>
  );
};

const Apoteker = () => {
  return (
    <View style={style.container}>
      <View style={style.txt_header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.txt_artikel}>Apoteker</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Text style={style.txt_lihatsemua}>Lihat semua</Text>
          </View>
        </View>
        <SafeAreaView>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}></SectionList>
        </SafeAreaView>
      </View>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Artikel',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
];

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt_header: {
    flex: 1,
  },
  txt_artikel: {
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
  item: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyle: {
    width: 80,
    height: 80,
    borderRadius: 1000,
  },
  itemText: {
    color: 'black',
    textAlignVertical: 'bottom',
    fontFamily: 'Poppins-Light',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: 'transparent',
    flex: 1,
    fontSize: 10,
  },
  background: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    opacity: 0.6,
  },
});

export default Apoteker;
