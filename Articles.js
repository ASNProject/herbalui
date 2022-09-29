import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

class Articles extends React.Component {
  render() {
    const { img, nama, harga } = this.props.produks;
    return (
      <View style={style.container}>
        <TouchableOpacity
        /*onPress={() => this.props.navigation.navigate('Details')}*/
        >
          <View>
            <Image style={style.img} source={{ uri: img }}></Image>
            <Text style={style.txt_nama}>{nama}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  img: {
    width: 140,
    height: 140,
  },
  txt_nama: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    color: 'black',
    width: 140,
  },
  txt_harga: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    color: '#0551FF',
  },
});

export default Articles;
