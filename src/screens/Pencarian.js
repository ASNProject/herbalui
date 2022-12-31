// import
import { API_URL } from "@env"
import {
  IMAGE_LOC,
  PRODUCT_TITLE,
  PRODUCT_PRICE,
  ARTICLE_TITLE,
  DIPUBLIKASIKAN,
} from "./script/GlobalScript"
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GS from './style/GlobalStyle';
import TopBar from './component/TopBar1';
import CardArtikel from './component/Card-Artikel';
import CardProduct from './component/Card-Product';
// icons
import artikel_1 from '../../assets/images/artikel_1.png';
// content
export default function Pencarian({ route, navigation }) {
  // variable
  const { keyword } = route.params;
  const [dataProducts, setDataProducts] = useState([]);
  const [dataArticles, setDataArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  //
  useEffect(() => {
    // get data product & articles related
    const options = {
      method: 'GET',
      url: API_URL + "/search-gejala",
      params: { keyword: keyword },
    };
    axios.request(options).then(function (response) {
      setDataProducts(response.data.data.products)
      setDataArticles(response.data.data.articles)
      // console.log(response.data);
    }).catch(function (error) {
      alert("terjadi kesalahan")
      console.error(error);
    })
      .then(function () {
        setLoading(false);
      })
  }, [])
  // function
  const backClick = function () {
    navigation.navigate('HomeMain');
  };
  const CardClick = function () {
    navigation.navigate('Artikel');
  };
  const ProdukClick = function () {
    navigation.navigate('Produk');
  };
  //
  return (
    <SafeAreaView style={[GS.bgWhite, GS.h100]}>
      {/* top bar */}
      <TopBar
        title={'Hasil untuk "' + keyword + '"'}
        backButton={true}
        backClick={backClick}
        nosearch={true}
      />
      <ScrollView
        style={[{ backgroundColor: '#fff' }]}
        showsVerticalScrollIndicator={false}>
        {/* content */}
        <View style={[GS.container, GS.mt4]}>
          {/* products */}
          {
            dataProducts.length > 0
              ? (
                <View>
                  <Text style={[GS.fs4]}>Produk berkaitan</Text>
                  <FlatList
                    data={dataProducts}
                    numColumns={2}
                    style={GS.mt1}
                    renderItem={({ item, index }) => {
                      return (
                        <View
                          style={{
                            flex: 1,
                            padding: 8,
                            maxWidth: '50%',
                          }}>
                          {/* card */}
                          <CardProduct
                            style={[{ width: "100%" }]}
                            whenCardClick={ProdukClick}
                            image={{ uri: IMAGE_LOC(item.images[0]["path"]) }}
                            title={PRODUCT_TITLE(item.name)}
                            price={PRODUCT_PRICE(item.price)}
                          />
                        </View>
                      );
                    }}></FlatList>
                </View>
              )
              :
              ""
          }
          {/* articles */}
          {
            dataArticles.length > 0
              ? (
                <View style={[Style.artikelSection, GS.mt5, GS.pt4]}>
                  <Text style={[GS.fs4]}>Artikel berkaitan</Text>
                  <View style={[GS.mt1]}>
                    {/* card */}
                    <FlatList
                      data={dataArticles}
                      numColumns={2}
                      renderItem={({ item, index }) => {
                        return (
                          <View>
                            {/* card */}
                            <CardArtikel
                              whenCardClick={CardClick}
                              image={{ uri: IMAGE_LOC(item.images[0]["path"]) }}
                              title={ARTICLE_TITLE(item.title)}
                              publishDate={DIPUBLIKASIKAN(item.created_at)}
                            />
                          </View>
                        );
                      }}></FlatList>
                  </View>
                </View>
              )
              :
              ""
          }
          {/* semua data tidak tersedia */}
          {
            dataProducts.length == 0 && dataArticles == 0 && !loading
              ? (
                <Text style={[GS.textCenter, GS.mt4]}>Data tidak tersedia</Text>
              )
              :
              ""
          }
          {/* memuat data */}
          {
            dataProducts.length == 0 && dataArticles == 0 && loading
              ? (
                <Text style={[GS.textCenter, GS.mt4]}>Loading</Text>
              )
              :
              ""
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// specific style
const Style = StyleSheet.create({
  //  favorite button
  buttonFavorite: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
  },
  artikelSection: {
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
});
