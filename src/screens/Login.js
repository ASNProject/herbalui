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
import axios from 'react-native-axios';
// icons
import Eye from '../../assets/icons/akar-icons_eye.svg';
import EyeClose from '../../assets/icons/ant-design_eye-invisible-outlined';
// global style
import GlobalStyle from './style/GlobalStyle';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  //
  const Login = function () {
    const form = new FormData();
    form.append('email', 'alendra099@gmail.com');
    form.append('password', '123456');

    const options = {
      method: 'POST',
      url: 'https://staging.herbalinfo.site/api/login',
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        alert('succeess!');
        // navigation.navigate('Home');
      })
      .catch(function (error) {
        alert('failed!');
        console.error(error);
        console.error(error.response.data);
      });
  };
  //
  function handleEye(condition) {
    if (condition == 'show') {
      setSecureTextEntry(true);
    } else {
      setSecureTextEntry(false);
    }
  }
  return (
    <View style={style.container}>
      {/* Main area */}
      <View style={{ flex: 1 }}>
        {/* title */}
        <Text style={[style.txt_silhkan, GlobalStyle.fs1]}>
          Silahkan Masuk!
        </Text>
        <Text
          style={[style.txt_pusatinformasi, GlobalStyle.fs5, GlobalStyle.mt1]}>
          Pusat Informasi dan Kajian Obat
        </Text>
        <Text style={[style.txt_pusatinformasi, GlobalStyle.fs5]}>
          Universitas Ahmad Dahlan
        </Text>
        {/* form login */}
        {/* input email */}
        <Text style={style.txt_alamtemail}>Alamat Email</Text>
        <TextInput
          style={[style.input_email, GlobalStyle.darkShadow]}
          placeholder="example@gmail.com"
          placeholderTextColor={'#A0A0A0'}
          onChangeText={email => setEmail(email)}></TextInput>
        {/* input password */}
        <Text style={style.txt_password}>Password</Text>
        <View style={style.pass}>
          <TextInput
            style={[style.input_password, GlobalStyle.darkShadow]}
            placeholder="password"
            placeholderTextColor={'#A0A0A0'}
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={password => setPassword(password)}></TextInput>
          {secureTextEntry ? (
            <TouchableOpacity
              style={style.eye_icon}
              onPress={() => {
                handleEye('hide');
              }}>
              <Eye width={50} height={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={style.eye_icon}
              onPress={() => {
                handleEye('show');
              }}>
              <EyeClose width={50} height={20} />
            </TouchableOpacity>
          )}
        </View>
        {/* Button masuk */}
        <TouchableOpacity
          onPress={() => {
            Login();
          }}
          style={[style.btn_login, GlobalStyle.primaryShadow]}>
          <Text style={[style.txt_login, GlobalStyle.fs3]}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn_lupapassword}
          onPress={() => navigation.navigate('Reset')}>
          <Text style={style.txt_lupapassword}>Lupa password</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom area */}
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={style.txt_belumpunyaakun}>Belum punya aku?</Text>
          <TouchableOpacity>
            <Text
              style={[style.txt_daftar, GlobalStyle.primaryColor]}
              onPress={() => navigation.navigate('Daftar')}>
              Daftar
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
// styling
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  txt_silhkan: {
    fontFamily: 'Roboto-Medium',
    marginTop: 200,
    color: 'black',
  },
  txt_pusatinformasi: {
    fontFamily: 'Roboto-Light',
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
  txt_password: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 20,
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
    backgroundColor: '#00A6A6',
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
    fontSize: 14,
    color: 'black',
  },
  txt_belumpunyaakun: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: 'black',
  },
  txt_daftar: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
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
  eye_icon: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
});

export default Login;
