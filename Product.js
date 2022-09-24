import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Product extends React.Component {
  render() {
    const { img, nama, harga } = this.props.produks;
    return (
      <View style={style.container}>
        <View>
          <Image style={style.img} source={{ uri: img }}></Image>
          <Text style={style.txt_nama}>{nama}</Text>
          <Text style={style.txt_harga}>{harga}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
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
  },
  txt_harga: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    color: '#0551FF',
  },
});

export default Product;
