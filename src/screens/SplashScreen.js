import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { StackAction, StackActions } from '@react-navigation/native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Daftar'));
    }, 3000);
  }

  render() {
    return (
      <ImageBackground
        source={require('./images/background.jpg')}
        style={style.image}>
        <Text style={style.text}>herbalku</Text>
        <Text style={style.text2}>berobat dengan obat alami</Text>
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -60,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: -10,
    fontFamily: 'Poppins-Light',
  },
});
export default Home;
