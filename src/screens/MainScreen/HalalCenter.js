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
import axios from 'axios';
// images
import Search from '../../../assets/icons/ph_magnifying-glass-bold.svg';
import ArrowRight from '../../../assets/icons/arrow_right.svg';
import Times from '../../../assets/icons/la_times.svg';
import { FlatList } from 'react-native-gesture-handler';
const headerImage = require('../../../assets/images/header_halal_center.png');
// content
export default function HalalCenter({ navigation }) {
  // variable
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState([]);
  //
  const getData = async (params) => {
    let key = keyword;
    if (params == "default") {
      key = "";
    }
    try {
      const res = await axios.get(
        API_URL + '/halal-center?keyword=' + key,
      );

      setData(res.data.data);
      console.log(res.data.data);
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
    setKeyword("");
    getData(params);
  };
  const cardClick = function () {
    navigation.navigate('HalalCenterDetail');
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
        title="Halal center"
        openSearch={openSearch}
        onSearchClick={ToggleSearch}
        onTimesClick={() => { ToggleSearch("default") }}
        value={keyword}
        setValue={setKeyword}
        onSubmit={() => { getData() }}
      />
      <View
        style={[{ backgroundColor: '#fff', height: '100%' }]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
        {/* content kartu artikel */}
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const lastitem = index === data.length - 1;
            return (
              <View style={[GS.container, GS.mt4]}>
                {/* card */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('HalalCenterDetail', item)
                  }>
                  <View
                    style={[
                      GS.flexRow,
                      GS.alignItemsCenter,
                      GS.justifySpaceBetween,
                      Style.cardHalalCenter,
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
  cardHalalCenter: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 3,
    padding: 25,
  },
  textCard: {
    width: '70%',
  },
});
