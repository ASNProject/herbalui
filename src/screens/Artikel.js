// lib
import { API_URL } from "@env"
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import GS from './style/GlobalStyle';
import CardArtikel from './component/Card-Artikel';
import TopBar from './component/TopBar1';
import { DIPUBLIKASIKAN } from "./script/GlobalScript";
// images
import Search from '../../assets/icons/ph_magnifying-glass-bold.svg';
import Times from '../../assets/icons/la_times.svg';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
// component input search
const InputSearch = function (props) {
  return (
    <View style={[GS.container, Style.InputSearch]}>
      <View style={[GS.flexRow, GS.alignItemsCenter]}>
        <Search width="10%" height="25" />
        <TextInput
          selectionColor={'#00A6A6'}
          style={[GS.pl2, Style.textInput]}
          placeholder="Cari kata kunci"
          returnKeyType="go"
          onSubmitEditing={event => {
            alert('searching');
          }}
        />
        <TouchableOpacity onPress={props.onTimesClick} width="10%" height="25">
          <Times height="25" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
// component contents
const Contents = function (props) {
  return (
    <View style={[GS.container, GS.mt4]}>
      {/* card */}
      <CardArtikel />
    </View>
  );
};
// content
export default function Artikel({ navigation }) {
  //axios
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getData = async (params) => {
    let key = keyword
    if (params == "default") {
      key = "";
    }
    try {
      const res = await axios.get(
        API_URL + '/articles?keyword=' + key,
      );
      setData(res.data.data.data);
      console.log(res.data.data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // variable
  const [openSearch, setOpenSearch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // function
  const ToggleSearch = function (params) {
    setOpenSearch(!openSearch);
    getData(params);
    setKeyword("");
  };
  const CardClick = function () {
    navigation.navigate('ArtikelDetail');
  };
  const backClick = function () {
    navigation.navigate('HomeMain');
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      alert('refreshing done');
      setRefreshing(false);
    }, 1000);
  }, []);
  //
  return (
    <SafeAreaView style={[GS.h100, GS.bgWhite]}>
      <TopBar
        title="Artikel"
        backButton={true}
        backClick={backClick}
        openSearch={openSearch}
        onSearchClick={ToggleSearch}
        onTimesClick={() => { ToggleSearch("default") }}
        value={keyword}
        setValue={setKeyword}
        onSubmit={() => { getData() }}
      />
      <View
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={[
          { backgroundColor: '#fff' },
        ]} /*showsVerticalScrollIndicator="false"*/
      >
        {/* content */}
        {/* data is empty */}
        {
          data.length == 0 ?
            (
              <Text style={[GS.textCenter, GS.fs5, GS.mt4]}>Data tidak tersedia</Text>
            )
            :
            ""
        }
        {/* card */}
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const lastitem = index === data.length - 1;
            return (
              <View style={[GS.container, GS.mt4]}>
                {/* card */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('ArtikelDetail', item)}>
                  <View
                    style={[
                      GS.flexRow,
                      GS.alignItemsCenter,
                      GS.justifySpaceBetween,
                      Style.cardHerbalEdu,
                    ]}>
                    <View style={[Style.cardLeft]}>
                      <Text style={[GS.fs4]}>{item.title}</Text>
                      <Text style={[GS.fs5, GS.fwLight, GS.mt2]}>
                        {DIPUBLIKASIKAN(item.created_at)}
                      </Text>
                    </View>
                    <View style={[Style.cardRight]}>
                      <Image
                        source={{
                          uri:
                            'https://staging.herbalinfo.site/storage/articles/example/article_' +
                            item.id +
                            '.png',
                        }}
                        style={[Style.imageCard]}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </View>
    </SafeAreaView>
  );
}
// style
const Style = StyleSheet.create({
  // header
  header: {
    width: '100%',
  },
  // search
  InputSearch: {
    paddingVertical: 15,
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 1,
    height: 60,
  },
  textInput: {
    width: '80%',
  },
  // header
  header: {
    width: '100%',
  },
  // search
  InputSearch: {
    paddingVertical: 15,
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 1,
    height: 60,
  },
  textInput: {
    width: '80%',
  },
  // card
  cardRight: {
    width: '30%',
  },
  cardLeft: {
    width: '70%',
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
