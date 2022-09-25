import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Slideshow from './component/slideshow';

const Detail = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Slideshow />
      </View>
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
});
export default Detail;
