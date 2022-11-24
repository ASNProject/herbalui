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

// images
const example_product_1 = require('../../../assets/images/olivia_turseena.png');
const example_product_2 = require('../../../assets/images/afia_kids.png');
const example_product_3 = require('../../../assets/images/temu-putih.png');

const url = 'https://staging-herbaluad.adolweb.com/api/products';
// component contents
const Contents = function (props) {
  return (
    <View style={[GS.container, GS.mt4]}>
      <View style={[GS.flexRow, GS.flexWrap]}>
        {/* card */}
        <CardProduct
          whenCardClick={props.whenCardClick}
          image={example_product_1}
          title="Olivia Turseena"
          price="Rp 20.000"
        />
      </View>
    </View>
  );
};
// content
export default function Products({ navigation }) {
  //axios
  const [data, getData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getAllData();
    return () => {};
  }, []);

  getAllData = () => {
    fetch(`${url}`)
      .then(res => res.join())
      .then(resJson => {
        getData(resJson.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const renderItem = ({ item, index }) => {
    const scale = Yscroll.interpolate({
      inputRange: [-1],
    });
  };

  // variable
  const [openSearch, setOpenSearch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // function
  const ToggleSearch = function () {
    setOpenSearch(!openSearch);
  };
  const CardClick = function () {
    navigation.navigate('ProductDetail');
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
      <View style={[{}]}>
        <TopBar
          title="Produk Herbal"
          openSearch={openSearch}
          onSearchClick={ToggleSearch}
          onTimesClick={ToggleSearch}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={[{ backgroundColor: '#fff', height: '100%' }]}>
          <View style={[GS.container, GS.mt4]}>
            {/* card */}

            <FlatList
              data={data}
              numColumns={2}
              style={Style.s}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => console.log('1')}>
                    <CardProduct
                      image={example_product_1}
                      title={item.name}
                      price={item.price}
                    />
                  </TouchableOpacity>
                );
              }}></FlatList>
          </View>
        </ScrollView>
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
});
