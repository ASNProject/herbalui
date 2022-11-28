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
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
              renderItem={({ item, index }) => {
                const lastitem = index === data.length - 1;
                return (
                  <View
                    style={{
                      flex: 1,
                      padding: 8,
                      maxWidth: lastitem ? '50%' : '100%',
                    }}>
                    <CardProduct
                      image={example_product_1}
                      title={item.name}
                      price={item.price}
                    />
                  </View>
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
