import { API_URL } from "@env"
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
  Card,
  FlatList,
  ToastAndroid,
} from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import GS from '../style/GlobalStyle';
import TopBar from '../component/TopBar1';
import CardProduct from '../component/Card-Product';

import axios from 'axios';
import { IMAGE_LOC, PRODUCT_PRICE } from "../script/GlobalScript";

// images
const example_product_1 = require('../../../assets/images/olivia_turseena.png');
const example_product_2 = require('../../../assets/images/afia_kids.png');
const example_product_3 = require('../../../assets/images/temu-putih.png');

// content
export default function Products({ navigation }) {
  //axios
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const url = API_URL + '/products';
  // const Yscroll = React.useRef(new Animated.Value(0)).current;

  const getData = async () => {
    try {
      const res = await axios.get(url);
      //  console.log(res)

      setData(res.data.data.data);
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
          onTimesClick={ToggleSearch}
        />
        <View
          style={[{ backgroundColor: '#fff', height: '100%' }]}>
          <View style={[GS.container, GS.mt4]}>
            {/* card */}

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
