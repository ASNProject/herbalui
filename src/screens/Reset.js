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

const Reset = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={style.container}>
      <View style={{ flex: 1 }}>
        <Text style={style.txt_silhkan}>Reset password</Text>
        <Text style={style.txt_pusatinformasi}>
          Pusat Informasi Obat Universitas Ahmad Dahlan
        </Text>
        <Text style={style.txt_alamtemail}>Alamat Email</Text>
        <TextInput
          style={style.input_email}
          placeholder="example@gmail.com"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={email => setEmail(email)}></TextInput>
        <TouchableOpacity style={style.btn_reset}>
          <Text style={style.txt_reset}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn_kembali}
          onPress={() => navigation.navigate('Login')}>
          <Text style={style.txt_kembali}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    justifyContent: 'center',
  },
  txt_silhkan: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginTop: 250,
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
    marginTop: 20,
    color: '#a0a0a0',
  },
  input_email: {
    backgroundColor: '#fff',
    padding: 10,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
  },

  btn_reset: {
    backgroundColor: '#0551FF',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  txt_reset: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  btn_kembali: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  txt_kembali: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: 'black',
  },
});

export default Reset;
