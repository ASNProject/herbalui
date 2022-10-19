import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StackNavigator,
  Image,
} from 'react-native';
import GlobalStyle from './style/GlobalStyle';
// import Icon from 'react-native-vector-icons/AntDesign';
// import App from './Home';

const Daftar = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasipassword, setKonfirmasiPassword] = useState('');

  return (
    <View style={style.container}>
      {/* top area */}
      <View style={{ flex: 1 }}>
        {/* title */}
        <Text style={[style.txt_silhkan, GlobalStyle.fs1]}>Selamat datang!</Text>
        <Text style={[style.txt_pusatinformasi, GlobalStyle.fs5, GlobalStyle.mt1]}>
          Pusat Informasi dan Kajian Obat
        </Text>
        <Text style={[style.txt_pusatinformasi, GlobalStyle.fs5]}>
          Universitas Ahmad Dahlan
        </Text>
        {/* name */}
        <Text style={[style.txt_nama]}>Nama</Text>
        <TextInput
          style={style.input_nama}
          placeholder="Ahmad"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={nama => setNama(nama)}></TextInput>
        <Text style={[style.txt_alamtemail, GlobalStyle.mt3]}>Alamat Email</Text>
        <TextInput
          style={style.input_email}
          placeholder="example@gmail.com"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={email => setEmail(email)}></TextInput>

        <Text style={[style.txt_password, GlobalStyle.mt3]}>Password</Text>
        <View style={style.pass}>
          <TextInput
            style={style.input_password}
            placeholder="**********"
            placeholderTextColor={'#A0A0A0'}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}></TextInput>
        </View>
        <Text style={[style.txt_password, GlobalStyle.mt3]}>Konfirmasi Password</Text>
        <View style={style.pass}>
          <TextInput
            style={style.input_password}
            placeholder="**********"
            placeholderTextColor={'#A0A0A0'}
            secureTextEntry={true}
            onChangeText={konfirmasipassword =>
              setKonfirmasiPassword(konfirmasipassword)
            }></TextInput>
        </View>
        <View style={style.x}>
          <Image
            style={style.img_x}
            source={require('./images/Vector-2.png')}></Image>
          <Text style={[style.txt_x, GlobalStyle.fs5]}>Password baru minimal 6 karakter</Text>
        </View>
        <View style={style.v}>
          <Image
            style={style.img_v}
            source={require('./images/Vector.png')}></Image>
          <Text style={[style.txt_v, GlobalStyle.fs5]}>Password baru terkonfirmasi</Text>
        </View>
        <TouchableOpacity style={[style.btn_login, GlobalStyle.bgPrimary]}>
          <Text style={[style.txt_login, GlobalStyle.fs3]}>Daftar</Text>
        </TouchableOpacity>
      </View>
      {/* bottom area */}
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={style.txt_belumpunyaakun}>Sudah punya akun?</Text>
          <TouchableOpacity>
            <Text
              style={style.txt_daftar}
              onPress={() => navigation.navigate('Login')}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[style.btn_lewati, GlobalStyle.mt2]}
          onPress={() => navigation.navigate('MainNavigation')}>
          <Text style={style.txt_lewati}>Lewati</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff"
  },
  txt_silhkan: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginTop: 100,
    color: 'black',
  },
  txt_pusatinformasi: {
    fontFamily: 'Roboto-Light',
  },
  txt_alamtemail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 5,
    color: '#a0a0a0',
  },
  input_email: {
    backgroundColor: '#fff',
    padding: 10,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.08,
  },
  txt_nama: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 20,
    color: '#a0a0a0',
  },
  input_nama: {
    backgroundColor: '#fff',
    padding: 10,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.08,
  },
  txt_password: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 5,
    color: '#a0a0a0',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.08,
  },
  input_password: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.08,
  },
  pass: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
  },
  btn_login: {
    height: 45,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  txt_login: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  btn_lupapassword: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  txt_lupapassword: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: 'black',
  },
  txt_belumpunyaakun: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: 'black',
  },
  txt_daftar: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#00A6A6',
    marginLeft: 5,
  },
  btn_lewati: {
    height: 40,
    backgroundColor: '#E6EDFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txt_lewati: {
    color: 'black',
    fontFamily: 'Poppins-Light',
    fontSize: 13,
  },
  x: {
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  img_x: {
    height: 8,
    width: 8,
    marginRight: 5,
  },
  txt_x: {
    fontFamily: 'Poppins-Regular',
  },
  v: {
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
  },
  img_v: {
    height: 8,
    width: 8,
    marginRight: 5,
  },
  txt_v: {
    fontFamily: 'Poppins-Regular',
  },
});

export default Daftar;
