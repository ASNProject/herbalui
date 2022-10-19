// lib
import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// component
import GlobalStyle from './style/GlobalStyle';
//
const Reset = ({ navigation }) => {
  // variable
  const [email, setEmail] = useState('');
  // content
  return (
    <View style={style.container}>
      <View style={{ flex: 1 }}>
        {/* title */}
        <Text style={style.txt_silhkan}>Reset password</Text>
        <Text style={style.txt_pusatinformasi}>
          Kode reset password akan dikirim ke email anda
        </Text>
        {/* input */}
        <Text style={style.txt_alamtemail}>Alamat Email</Text>
        <TextInput
          style={[style.input_email, GlobalStyle.darkShadow]}
          placeholder="example@gmail.com"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={email => setEmail(email)}></TextInput>
        {/* confirm button */}
        <TouchableOpacity style={[style.btn_reset]}>
          <Text style={[style.txt_reset, GlobalStyle.fs3]}>Reset Password</Text>
        </TouchableOpacity>
        {/* back button */}
        <TouchableOpacity
          style={style.btn_kembali}
          onPress={() => navigation.navigate('Login')}>
          <Text style={style.txt_kembali}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// attach style
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  txt_silhkan: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginTop: 250,
    color: 'black',
  },
  txt_pusatinformasi: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    color: '#000',
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
    backgroundColor: '#00A6A6',
    height: 45,
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
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#00A6A6',
  },
});
//
export default Reset;
