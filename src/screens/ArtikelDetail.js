// import
import { API_URL } from "@env"
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import GS from './style/GlobalStyle';
import CardArtikel from './component/Card-Artikel';
import TopBar from './component/TopBar1';
import { useState, useEffect } from 'react';
import { IMAGE_LOC } from "./script/GlobalScript";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
// images
import artikel_1 from '../../assets/images/artikel_1.png';
import artikel_2 from '../../assets/images/artikel_2.png';
import artikel_3 from '../../assets/images/artikel_3.png';
//
const MainContent = function () {
  return (
    <View style={[GS.container, GS.mt4]}>
      <Text style={[GS.fs2, GS.fwMedium]}>
        5 manfaat meditasi yang belum banyak orang tahu
      </Text>
      <Text style={[GS.fs6, GS.fwLight]}>
        Di publikasikan pada 3 oktober 2022
      </Text>
      <Image source={artikel_1} style={[Style.imageArticle, GS.mt3]} />
      <Text style={[GS.mt3, GS.fwLight]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet
        eros eget ipsum tempus dictum. Aliquam quis rhoncus orci, at bibendum
        elit. In eget odio luctus purus tincidunt pulvinar. Curabitur id tortor
        at lorem sodales fringilla. Donec augue sem, rutrum in urna quis,
        consequat porttitor tellus. Nulla ac condimentum lorem. Sed ultricies
        feugiat ex. Cras mollis justo quis ante vulputate, eu tristique enim
        commodo. Sed pretium vitae augue eu pulvinar. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        id diam lectus. Sed tempor augue augue, sed tristique neque porta ac.
      </Text>
    </View>
  );
};
// content
export default function ArtikelDetail({ navigation, route }) {
  const [userFavorite, setuserFavorite] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [backTo, setBackTo] = useState(null);

  // function
  const backClick = function () {
    if (backTo == null) {
      navigation.navigate('Artikel');
    } else {
      navigation.navigate(backTo);
    }
  };
  const CardClick = function () {
    navigation.navigate('ArtikelDetail');
  };
  // toggle favorite
  const toggleFavorite = function () {
    // alert("ok")
    setuserFavorite(!userFavorite);
    const form = new FormData();
    form.append("article_id", route.params.id);
    const options = {
      method: 'POST',
      url: API_URL + '/auth/toggle-favorite',
      headers: {
        Auth: userToken
      },
      data: form
    };

    axios.request(options).then(function (response) {
      // console.log(response.data);
    }).catch(function (error) {
      Alert.alert("Terjadi kesalahan", "tidak dapat memperbaruhi data")
      // console.error(error);
    });
  }
  useEffect(() => {
    // get user data
    // check if user auth token is valid
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@userAuth')
        const back_button = await AsyncStorage.getItem('@requestBack')
        setBackTo(back_button)
        // validasi data user
        if (value !== null) {
          // value previously stored
          // validate user data
          let userData = JSON.parse(value);
          // set variable user token
          setUserToken(userData.token);
          // get users favorite data
          // request user favorite
          const options = {
            method: 'GET',
            url: API_URL + '/auth/favorite',
            headers: {
              Auth: userData.token
            },
          };

          axios.request(options).then(function (response) {
            // alert("halo")
            let userFavorite = response.data.data.articles;
            userFavorite.forEach((item, index) => {
              if (item.article_id == route.params.id) {
                setuserFavorite(true)
              }
            })
          }).catch(function (error) {
            console.error(error);
          });
        } else {
          // handle as guest
          navigation.replace("PleaseLogin")
        }
      } catch (e) {
        // error reading value
        alert("Terjadi kesalahan");
      }
    }
    // get user data
    getData()
    // focus
    const unsubscribe = navigation.addListener('focus', () => {
      // Call any action
      setBackTo(null)
    });
    return unsubscribe
  }, [navigation])
  //
  return (
    <SafeAreaView style={[GS.h100, GS.bgWhite]}>
      {/* top bar */}
      <TopBar
        title="Artikel"
        backButton={true}
        backClick={backClick}
        nosearch={true}
        showFavorite={true}
        favoriteStatus={userFavorite}
        toggleFavorite={toggleFavorite}
      />
      <ScrollView style={[{ backgroundColor: '#fff' }]}>
        {/* content */}
        <View style={[GS.container, GS.mt4]}>
          <Text style={[GS.fs2, GS.fwMedium]}>{route.params.title}</Text>
          <Text style={[GS.fs6, GS.fwLight]}>
            Di publikasikan pada 3 oktober 2022
          </Text>
          <Image
            source={{
              uri:
                IMAGE_LOC(route.params.images[0].path),
            }}
            style={[Style.imageArticle, GS.mt3]}
          />
          <Text style={[GS.mt3, GS.fwLight]}>{route.params.body}</Text>
        </View>
        {/* read others */}
        <View style={[GS.container, GS.mt5, Style.sectionRecomend, GS.pt3]}>
          <Text style={[GS.fs5, GS.pb2]}>Baca lainya</Text>
          {/* card */}
          <CardArtikel
            whenCardClick={CardClick}
            image={artikel_1}
            title="5 manfaat meditasi yang belum banyak orang tahu"
            publishDate="Dipublikaiskan 10 mei 2022"
          />
          {/* card */}
          <CardArtikel
            whenCardClick={CardClick}
            image={artikel_2}
            title="5 manfaat meditasi yang belum banyak orang tahu"
            publishDate="Dipublikaiskan 10 mei 2022"
          />
          {/* card */}
          <CardArtikel
            whenCardClick={CardClick}
            image={artikel_3}
            title="5 manfaat meditasi yang belum banyak orang tahu"
            publishDate="Dipublikaiskan 10 mei 2022"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// specific style
const Style = StyleSheet.create({
  imageArticle: {
    width: '100%',
    height: 200,
    borderRadius: 3,
  },
  sectionRecomend: {
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
});
