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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/EvilIcons';
const ListPertanyaan = ({ item }) => {
  const [shouldShow, setshouldShow] = useState(true);
  return (
    <View style={style.items}>
      <View style={style.img}>
        <Image
          source={{ uri: item.uri }}
          style={style.imagestyle}
          resizeMode="cover"></Image>
        <View>
          <Text style={style.nama}>{item.nama}</Text>
          <Text style={style.waktu_bertanya}>{item.waktubertanya}</Text>
        </View>
      </View>
      <Text style={style.txt_isipertanyaan}>{item.pertanyaan}</Text>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          {shouldShow ? (
            <View style={style.jawaban}>
              <Text style={style.isi_jawaban}>{item.jawaban}</Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}>
                <View>
                  <Text style={style.txt_pengirimjawaban}>{item.pengirim}</Text>
                  <Text style={style.txt_waktujawaban}>
                    {item.waktujawaban}
                  </Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
      <TouchableOpacity>
        <Text
          style={style.lihatjawaban}
          onPress={() => setshouldShow(!shouldShow)}>
          Lihat/Tutup Jawaban
        </Text>
      </TouchableOpacity>
      <View style={style.line}></View>
    </View>
  );
};

const Pertanyaan = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.txt_pertanyaan}>Pertanyaan</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <TouchableOpacity>
              <Text style={style.btn_pertanyaan}>Buat pertanyaan</Text>
            </TouchableOpacity>
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
              return <ListPertanyaan item={item} />;
            }}></SectionList>
        </SafeAreaView>
      </View>
      <TouchableOpacity style={style.btn_banyak}>
        <Text style={style.tampilbanyak}>Tampilkan lebih banyak</Text>
        <Icon name="chevron-down" size={25} style={{ color: 'black' }} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  body: {
    flex: 1,
    marginTop: 10,
    padding: 10,
  },
  txt_pertanyaan: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 10,
  },
  btn_pertanyaan: {
    color: '#0551FF',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  items: {
    flex: 1,
    marginTop: 10,
  },
  img: {
    flexDirection: 'row',
  },
  imagestyle: {
    width: 30,
    height: 30,
    borderRadius: 1000,
    marginRight: 10,
  },
  nama: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'black',
  },
  waktu_bertanya: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginTop: -5,
  },
  txt_isipertanyaan: {
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
  },
  jawaban: {
    marginTop: 2,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  isi_jawaban: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
  },
  txt_pengirimjawaban: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'black',
    textAlign: 'right',
  },
  txt_waktujawaban: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
    textAlign: 'right',
  },
  lihatjawaban: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
    marginTop: 10,
    textDecorationLine: 'underline',
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
  tampilbanyak: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'black',
  },
  btn_banyak: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 2,
  },
});

const SECTIONS = [
  {
    title: 'Pertanyaan',
    horizontal: false,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
        nama: 'Aditya',
        waktubertanya: '3 jam yang lalu',
        pertanyaan: 'ini bisa untuk hati enggak ya?',
        jawaban: 'bisa kak',
        pengirim: 'Admin',
        waktujawaban: '3 Jam yang lalu',
      },
      {
        key: '2',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
        nama: 'Budiman',
        waktubertanya: '4 jam yang lalu',
        pertanyaan: 'Ready kak?',
        jawaban: 'banyak kak. silahkan diorder',
        pengirim: 'Admin',
        waktujawaban: '4 Jam yang lalu',
      },
    ],
  },
];

export default Pertanyaan;
