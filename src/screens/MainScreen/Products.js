import { API_URL } from "@env"
// lib
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import GS from '../style/GlobalStyle';
import TopBar from '../component/TopBar1';
import CardProduct from '../component/Card-Product';
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from 'axios';
import { IMAGE_LOC, PRODUCT_PRICE } from "../script/GlobalScript";

// content
export default function Products({ navigation }) {
  //axios
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      // Call any action
      await AsyncStorage.removeItem('@requestBack');
      getData();
    });
    getData();
    return unsubscribe
  }, [navigation]);

  // variable
  const [openSearch, setOpenSearch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // function
  const ToggleSearch = function (params) {
    setOpenSearch(!openSearch);
    setKeyword("");
    getData(params);
  };
  //
  const getData = async (params) => {
    try {
      let key = keyword;
      if (params == "default") {
        key = ""
      }
      let url = API_URL + '/products?keyword=' + key;
      const res = await axios.get(url);
      //  console.log(res)
      setData(res.data.data);
    } catch (error) {
      alert(error.message);
    }
  };
  //
  const CardClick = function (item) {
    navigation.navigate('ProductDetail', item);
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // alert('refreshing done');
    getData();
    setRefreshing(false);
  }, []);
  //
  return (
    <SafeAreaView style={[{ paddingBottom: 0, backgroundColor: '#fff' }]}>
      <View style={[{}]}>
        <TopBar
          title="Produk Herbal"
          openSearch={openSearch}
          onSearchClick={ToggleSearch}
          onTimesClick={() => { ToggleSearch("default") }}
          value={keyword}
          setValue={setKeyword}
          onSubmit={() => { getData() }}
        />
        <View
          style={[{ backgroundColor: '#fff', height: '100%' }]}>
          <View style={[GS.container, GS.mt4]}>
            {/* data is empty */}
            {
              data.length == 0 ?
                (
                  <Text style={[GS.textCenter, GS.fs5]}>Data tidak tersedia</Text>
                )
                :
                ""
            }
            {/* kartu-kartu products */}
            <FlatList
              data={data}
              numColumns={2}
              onRefresh={() => onRefresh()}
              refreshing={refreshing}
              style={[Style.s, GS.h100]}
              renderItem={({ item, index }) => {
                const lastitem = index === data.length - 1;
                return (
                  <CardProduct
                    whenCardClick={() => { CardClick(item) }}
                    image={{ url: IMAGE_LOC(item.images[0]["path"]) }}
                    title={item.name}
                    price={PRODUCT_PRICE(item.price)}
                  />
                );
              }}></FlatList>
          </View>
        </View>
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
  s: {
    marginBottom: 150,
  },
  // card
  cardProduct: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    padding: 20,
    margin: '2%',
  },
  imageProduct: {
    height: 100,
    width: 90,
    resizeMode: 'contain',
  },
});
