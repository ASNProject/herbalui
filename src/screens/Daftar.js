import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StackNavigator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import App from './Home';

const Daftar = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasipassword, setKonfirmasiPassword] = useState('');

  return (
    <View style={style.container}>
      <View style={{ flex: 1 }}>
        <Text style={style.txt_silhkan}>Selamat datang!</Text>
        <Text style={style.txt_pusatinformasi}>
          Pusat Informasi Obat Universitas Ahmad Dahlan
        </Text>
        <Text style={style.txt_nama}>Nama</Text>
        <TextInput
          style={style.input_nama}
          placeholder="Ahmad"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={nama => setNama(nama)}></TextInput>
        <Text style={style.txt_alamtemail}>Alamat Email</Text>
        <TextInput
          style={style.input_email}
          placeholder="example@gmail.com"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={email => setEmail(email)}></TextInput>
        <Text style={style.txt_password}>Password</Text>
        <View style={style.pass}>
          <TextInput
            style={style.input_password}
            placeholder="**********"
            placeholderTextColor={'#A0A0A0'}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}></TextInput>
          <Icon
            style={{ textAlignVertical: 'center', padding: 10 }}
            name="eye"
            size={12}
            color="a0a0a0"
          />
        </View>
        <Text style={style.txt_password}>Konfirmasi Password</Text>
        <View style={style.pass}>
          <TextInput
            style={style.input_password}
            placeholder="**********"
            placeholderTextColor={'#A0A0A0'}
            secureTextEntry={true}
            onChangeText={konfirmasipassword =>
              setKonfirmasiPassword(konfirmasipassword)
            }></TextInput>
          <Icon
            style={{ textAlignVertical: 'center', padding: 10 }}
            name="eye"
            size={12}
            color="a0a0a0"
          />
        </View>
        <TouchableOpacity style={style.btn_login}>
          <Text style={style.txt_login}>Daftar</Text>
        </TouchableOpacity>
      </View>
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
          style={style.btn_lewati}
          onPress={() => navigation.navigate('Home')}>
          <Text style={style.txt_lewati}>Lewati</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  txt_silhkan: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginTop: 100,
    color: 'black',
  },
  txt_pusatinformasi: {
    fontFamily: 'Roboto-Light',
    fontSize: 10,
    color: '#002885',
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
  },
  txt_password: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 5,
    color: '#a0a0a0',
  },
  input_password: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    flex: 1,
  },
  pass: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
  },
  btn_login: {
    backgroundColor: '#0551FF',
    height: 40,
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
    color: '#0074DF',
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
});

export default Daftar;
