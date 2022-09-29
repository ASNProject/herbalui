import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Deskripsi from './component/deskripsi';
import Pertanyaan from './component/pertanyaan';
import ProdukLainnya from './component/produk_lainnya';
import Slideshow from './component/slideshow';
import { Popup } from './component/Popup';

const Detail = () => {
  let popupRef = React.createRef();
  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView style={style.container}>
          <View style={style.body}>
            <Slideshow />
            <Deskripsi />
            <View style={style.body2}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.txt_pertanyaan}>Pertanyaan</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flex: 1,
                  }}>
                  <TouchableWithoutFeedback onPress={onShowPopup}>
                    <Text style={style.btn_pertanyaan}>Buat pertanyaan</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
            <Pertanyaan />
            <ProdukLainnya />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={style.beli}>
        <Text style={style.txt_beli}>Beli Sekarang</Text>
      </TouchableOpacity>
      <Popup
        title="Buat pertanyaan"
        ref={target => (popupRef = target)}
        onTouchOutSide={onClosePopup}></Popup>
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
  body2: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  beli: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0551FF',
    height: 40,
  },
  txt_beli: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
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
});
export default Detail;
