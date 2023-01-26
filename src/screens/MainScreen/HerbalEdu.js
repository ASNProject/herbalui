// lib
import { API_URL } from "@env"
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import GS from '../style/GlobalStyle';
import TopBar from '../component/TopBar1';
// images
import ArrowRight from '../../../assets/icons/arrow_right.svg';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
const headerImage = require('../../../assets/images/header_herbal_edu.png');
// content
export default function HerbalEdu({ navigation }) {
  // variable
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  //
  const getData = async (params) => {
    let key = keyword
    if (params == "default") {
      key = "";
    }
    try {
      const res = await axios.get(
        API_URL + '/herbal-edu?keyword=' + key,
      );
      setData(res.data.data);
      // console.log(res.data.data.data);
    } catch (error) {
      // alert(error.message);
    }
  };
  // when page is loaded
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
    navigation.navigate('HerbalEduDetail');
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
    <SafeAreaView style={[{ paddingBottom: 0, backgroundColor: '#fff' }]}>
      <TopBar
        title="Herbal edu"
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
        style={[{ backgroundColor: '#fff', height: '100%' }]}
      //showsVerticalScrollIndicator="false"
      >
        {/* header */}
        <Image source={headerImage} style={[Style.header]} />
        {/* data is empty */}
        {
          data.length == 0 ?
            (
              <Text style={[GS.textCenter, GS.fs5, GS.mt4]}>Data tidak tersedia</Text>
            )
            :
            ""
        }
        {/* content kartu-kartu artikel */}
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const lastitem = index === data.length - 1;
            return (
              <View style={[GS.container, GS.mt4]}>
                {/* card */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('HerbalEduDetail', item)}>
                  <View
                    style={[
                      GS.flexRow,
                      GS.alignItemsCenter,
                      GS.justifySpaceBetween,
                      Style.cardHerbalEdu,
                    ]}>
                    <Text style={[Style.textCard, GS.fs5]}>{item.title}</Text>
                    <ArrowRight width="30" height="30" />
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
  // card
  cardHerbalEdu: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 3,
    padding: 25,
  },
  textCard: {
    width: '70%',
  },
});
