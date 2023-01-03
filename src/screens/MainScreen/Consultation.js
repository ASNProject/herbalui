import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GS from '../style/GlobalStyle';
import TopBar from '../component/TopBar1';
import { API_URL } from "@env";
import { IMAGE_LOC } from '../script/GlobalScript';
// images
const profile_robot = require('../../../assets/images/konsultasi_robot.png');
const profile_1 = require('../../../assets/images/konsultasi_1.png');
const profile_2 = require('../../../assets/images/konsultasi_2.png');
import IconOffline from '../../../assets/icons/offline.svg';
import IconOnline from '../../../assets/icons/online.svg';
import axios from "axios";
// component consultants
const Consultant = function (props) {
  const [dataConnsult, setDataConsult] = useState([]);
  const [loading, setLoading] = useState(false);
  const roboAvail = false;
  // functions
  const getConsultantData = function () {
    const form = new FormData();
    const options = {
      method: 'GET',
      url: API_URL + '/consultants',
      data: form
    };
    axios.request(options).then(function (response) {
      // console.log(response.data);
      setDataConsult(response.data.data);
      // alert("Berhasil!");
    }).catch(function (error) {
      console.error(error);
      alert("Terjadi kesalahan!");
    });
  }
  // on page load
  useEffect(function () {
    // get consultation data
    getConsultantData();
  }, [])
  //
  return (
    <View style={[GS.container, GS.mt4]}>
      {/* robo consult */}
      {
        roboAvail ?
          (
            <TouchableOpacity onPress={props.clickOpenChat}>
              <View style={[Style.Card, GS.flexRow, GS.mb4]}>
                <View>
                  <Image style={[Style.cardImageRobo]} source={profile_robot} />
                </View>
                <View style={[GS.ml3]}>
                  {/* online */}
                  {/* <View style={[GS.flexRow, GS.alignItemsCenter]}>
              <IconOnline />
              <Text style={[GS.ml1, GS.fs6, GS.fwLight]}>online</Text>
            </View> */}
                  <Text style={[GS.fs4, GS.fwLight]}>Robo</Text>
                  <Text style={[GS.fwLight, GS.fs5]}>klik untuk mulai chat</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
          : ""
      }
      {/* chat konsultan */}
      {
        dataConnsult.map((item) =>
          <TouchableOpacity>
            <View style={[Style.Card, GS.flexRow, GS.mb4]}>
              <View>
                <Image style={[Style.cardImage]} source={{ uri: IMAGE_LOC(item.profile_image) }} />
              </View>
              <View style={[GS.ml3]}>
                {/* online */}
                {/* <View style={[GS.flexRow, GS.alignItemsCenter]}>
                <IconOnline />
                <Text style={[GS.ml1, GS.fs6, GS.fwLight]}>online</Text>
              </View> */}
                <Text style={[GS.fs4, GS.fwLight]}>{item.name}</Text>
                <Text style={[GS.fwLight, GS.fs5]}>klik untuk mulai chat</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
      {/* jika data kosong */}
      {
        !roboAvail && dataConnsult.length == 0 ?
          (
            <View style={[GS.flexColum]}>
              <Text style={[GS.fwBold, GS.fs2, GS.textCenter, GS.primaryColor]}>Mohon maaf</Text>
              <Text style={[GS.textCenter, GS.fwLight, GS.fs5]}>Konsultasi online seddang tidak tersedia</Text>
            </View>
          )
          : ""
      }
    </View>
  );
};
export default function Consultation({ navigation }) {
  // function
  const openChat = function () {
    navigation.navigate('ConsultationDetail');
  };
  return (
    <ScrollView
      style={[{ backgroundColor: '#fff' }]} //showsVerticalScrollIndicator={false}
    >
      <SafeAreaView>
        {/* topbar */}
        <TopBar title="Konsultasi" nosearch={true} />
        {/* consultants */}
        <Consultant clickOpenChat={openChat} />
      </SafeAreaView>
    </ScrollView>
  );
}
// style
const Style = StyleSheet.create({
  Card: {
    borderColor: '#F3F3F3',
    borderWidth: 1,
    padding: 20,
  },
  cardImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 100,
  },
  cardImageRobo: {
    width: 60,
    height: 60,
  },
  numberIncomingMessage: {
    color: '#fff',
    borderRadius: 1000,
  },
  BGnumberIncomingMessage: {
    color: '#fff',
    backgroundColor: '#00A6A6',
    borderRadius: 1000,
    width: 20,
    height: 20,
  },
});
