// lib
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
import GS from '../style/GlobalStyle';
import TopBar from '../component/TopBar1';
// images
import Search from '../../../assets/icons/ph_magnifying-glass-bold.svg';
import ArrowRight from '../../../assets/icons/arrow_right.svg';
import Times from '../../../assets/icons/la_times.svg';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
//import { err } from 'react-native-svg/lib/typescript/xml';
const headerImage = require('../../../assets/images/header_herbal_edu.png');
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
// content
export default function HerbalEdu({ navigation }) {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://staging.herbalinfo.site/api/herbal-edu',
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
  const ToggleSearch = function () {
    setOpenSearch(!openSearch);
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
        onTimesClick={ToggleSearch}
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
        {/* content */}
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
