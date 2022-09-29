import {
  Modal,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React from 'react';

const deviceHeight = Dimensions.get('window').height;
export class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: '100%' }}></View>;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  render() {
    let { show } = this.state;
    const { onTouchOutside, title } = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View style={style.body}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View style={style.container}>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={style.popup}>{title}</Text>
              <View style={style.a}>
                <TextInput
                  multiline={true}
                  style={style.masukkanpertanyaan}></TextInput>
              </View>
              <TouchableOpacity style={style.tambahpertanyaan}>
                <Text style={style.txt_tambah}>Tambah Pertanyaan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceHeight * 0.4,
  },
  popup: {
    color: '#182E44',
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
  },
  masukkanpertanyaan: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    height: 100,
    width: '100%',
    textAlignVertical: 'top',
  },
  a: {
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    height: 100,
  },
  tambahpertanyaan: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0551FF',
    height: 40,
    marginTop: 10,
    marginBottom: 40,
  },
  txt_tambah: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
});
