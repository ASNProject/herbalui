import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Statusbar,
  Dimensions,
  ImageStore,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const img = [
  'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk1.png?alt=media&token=16959b29-d502-4e13-afdb-887bbd483451',
  'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk2.png?alt=media&token=32ba61d3-eae6-4547-8930-0490ba8724a4',
  'https://firebasestorage.googleapis.com/v0/b/project1-e0641.appspot.com/o/Produk3.png?alt=media&token=c9f99871-a9fd-4086-804a-85574d0144f0',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slideshow = () => {
  const [imgActive, setimgActive] = useState(0);
  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={style.wrap}>
          {img.map((e, index) => (
            <ImageBackground
              key={e}
              resizeMode="stretch"
              style={style.wrap}
              source={{ uri: e }}></ImageBackground>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: 10,
            marginHorizontal: 10,
          }}>
          <Icon name="arrow-left" size={40} style={{ color: 'black' }} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Icon name="star" size={30} color={'yellow'} />
          </View>
        </View>
        <View style={style.dot}>
          {img.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? style.dotActive : style.dots}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {},
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  dot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 6,
    color: 'black',
  },
  dots: {
    margin: 6,
    color: 'white',
  },
});
export default Slideshow;
