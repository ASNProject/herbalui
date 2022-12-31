// import
import { useState, useEffect, useRef } from "react";
import { API_URL } from "@env"
import { IMAGE_LOC, PRODUCT_TITLE, PRODUCT_PRICE } from "./script/GlobalScript";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");
import ActionSheet from "react-native-actions-sheet";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import GS from './style/GlobalStyle';
import TopBar from './component/TopBar1';
import CardProduct from './component/Card-Product';
import axios from 'axios';
// images
const personImage = require('../../assets/images/default-user.jpeg');
const example_product_2 = require('../../assets/images/afia_kids.png');
const example_product_3 = require('../../assets/images/temu-putih.png');
// form buat pertanyaan / diskusi
const FormDiskusi = function (props) {
  return (
    <View style={[Style.styleFormDiskusi]}>
      <Text style={[GS.primaryColor, GS.fwBold, GS.fs4]}>Tambah diskusi</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[Style.inputDiskusi, GS.mt2]}
        cursorColor={"#00A6A6"}
        selectionColor={"#00A6A6"}
        onChangeText={props.onChange}
        value={props.textValue}
        placeholder="Buat pertanyaan / pesan" />
      <TouchableOpacity
        onPress={props.submit}
        style={[GS.mt2, GS.py3, Style.buttonSubmit]}>
        <Text style={[GS.textCenter, GS.whiteColor, GS.fwBold]}>Kirim pertanyaan / jawaban</Text>
      </TouchableOpacity>
    </View>
  )
}
// component photos
const Photos = function (route) {
  return (
    <View style={[GS.mt0, { backgroundColor: '#FAFAFA' }]}>
      <View style={[GS.container, { backgroundColor: '#FAFAFA' }]}>
        <View style={[GS.flexRow, GS.justifyContentCenter]}>
          <Image
            source={{
              uri: route.imageSource
            }}
            style={[Style.imageMainProduct]}
          />
        </View>
      </View>
    </View>
  );
};
// component details
const Details = function (props) {
  return (
    <View style={[GS.container, GS.mt4]}>
      <View>
        <Text style={[GS.fwMedium, GS.fs3]}>{props.name}</Text>
        <Text style={[GS.fs3]}>{props.price}</Text>
      </View>
      <View style={[GS.mt4]}>
        <Text style={[GS.fs5]}>Deskripsi</Text>
        <View style={[GS.flexRow]}>
          <Text style={[{ width: '40%' }, GS.fs5, GS.fwLight]}>
            Nomor ijin edar
          </Text>
          <Text style={[GS.fs5, GS.fwLight]}>{props.nie}</Text>
        </View>
      </View>
      <View style={[GS.mt3, Style.descriptionColumn, GS.pt2]}>
        <Text style={[GS.fs5, GS.fwLight]}>{props.description}</Text>
      </View>
    </View>
  );
};
// component discuss
const Discuss = function (props) {
  return (
    <View style={[GS.container, GS.mt5]}>
      <View>
        <View style={[GS.flexRow, GS.justifySpaceBetween]}>
          <Text style={[GS.fs5]}>Diskusi</Text>
          <TouchableOpacity
            onPress={props.showActionSheet}
          >
            <Text style={[GS.fs5, GS.primaryColor]}>Buat pertanyaan</Text>
          </TouchableOpacity>
        </View>
        {/* discussion card */}
        {
          props.discussionData.length > 0
            ?
            props.discussionData.map((item, index) =>
              <View key={index} style={[GS.mt4]}>
                {/* profile */}
                <View style={[GS.flexRow]}>
                  <Image
                    source={personImage}
                    style={[Style.personDiscussImage]}
                  />
                  <View style={[GS.ml2]}>
                    <Text>{item.user.name}</Text>
                    <Text>{moment(item.created_at).startOf('day').fromNow()}</Text>
                  </View>
                </View>
                <Text style={[GS.mt3, GS.fwLight]}>
                  {item.message}
                </Text>
                {/* answer */}
                {item.childs.map((item2) =>
                  <View
                    style={[
                      Style.cardDiscuss,
                      GS.flexRow,
                      GS.justifySpaceBetween,
                      GS.mt3,
                    ]}>
                    <View>
                      <Text style={[GS.fs5, GS.fwLight]}>{item.message}</Text>
                    </View>
                    <View>
                      <Text style={[GS.fwLight, GS.fs5]}>{item2.user.name}</Text>
                      <Text style={[GS.fs6, GS.fwLight]}>{moment(item2.created_at).startOf('day').fromNow()}</Text>
                    </View>
                  </View>
                )}
              </View>
            )
            :
            (
              <Text style={[GS.fwLight, GS.fs5, GS.mt2]}>Belum ada diskusi</Text>
            )
        }
      </View>
    </View>
  );
};
// component recomendations
const Recomendations = function (props) {
  return (
    <View style={[GS.container, GS.mt5]}>
      <Text style={[GS.fs5]}>Obat lainya</Text>
      <View style={[GS.flexRow, GS.flexWrap]}>
        {/* card */}
        <FlatList
          data={props.data}
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
                  whenCardClick={() => { props.click(item) }}
                  image={{ uri: IMAGE_LOC(item.images[0]["path"]) }}
                  title={PRODUCT_TITLE(item.name)}
                  price={PRODUCT_PRICE(item.price)}
                />
              </View>
            );
          }}></FlatList>
      </View>
    </View>
  );
};
// content
export default function ProductDetail({ navigation, route }) {
  // state variable
  const [discussionData, setDiscussionData] = useState([]);
  const [message, setMessage] = useState("");
  const [recomendations, setRecomendations] = useState([]);
  //
  const actionSheetRef = useRef(null);
  // function
  const backClick = function () {
    navigation.navigate('Produk');
  };
  const CardClick = function (item) {
    navigation.replace('ProductDetail', item);
  };
  // show action sheet
  const showActionSheet = function () {
    actionSheetRef.current?.show();
  }
  //
  // get discussions data
  const getDiscussions = function () {
    const options = {
      method: 'GET',
      url: API_URL + '/discussion/' + route.params.id,
    };
    axios.request(options).then(function (response) {
      // console.log(response.data.data.length);
      setDiscussionData(response.data.data);
    }).catch(function (error) {
      console.error(error);
    })
  }
  // handle submit data form diskusi
  const handleSubmitDiskusi = function () {
    Alert.alert(
      "Konfirmasi",
      "Kirim pesan anda?",
      [
        // The "Yes" button
        {
          text: "Ya",
          onPress: () => {
            // uploading data diskusi
            const form = new FormData();
            form.append("product_id", route.params.id);
            form.append("message", message);
            // form.append("answer_discussion_id", null);
            const options = {
              method: 'POST',
              url: API_URL + '/auth/create-discussion',
              headers: {
                Auth: 'cAzsqNelQddDNdBho2M7YTNu5Fx81AiTeXcwyUgFFcSMY2cOPJqSeeWA'
              },
              data: form
            };

            axios.request(options).then(function (response) {
              // console.log(response.data);
              getDiscussions();
              alert("Pesan di tambahkan");
            }).catch(function (error) {
              alert("terjadi kesalahan");
              console.error(error);
            })
              .then(function () {
                setMessage("");
                actionSheetRef.current?.hide();
              })
            //
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Batal",
        },
      ]
    );
  }
  // recomendations
  const getRecomendations = function () {
    const options = {
      method: 'GET',
      url: API_URL + '/products/other-products/' + route.params.id
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setRecomendations(response.data.data)
    }).catch(function (error) {
      // console.error(error);
      // console.log("terjadi kesalahan!")
    });
  }
  //
  useEffect(() => {
    // get disucussions data
    getDiscussions();
    // get recomendations data
    getRecomendations();
  }, [])
  //
  return (
    <SafeAreaView style={[{ backgroundColor: '#fff', height: '100%' }]}>
      {/* top bar */}
      <TopBar
        title="Olivia turseena"
        backButton={true}
        backClick={backClick}
        nosearch={true}
        showFavorite={true}
        showCart={true}
      />
      <ScrollView style={[{ backgroundColor: '#fff', height: '100%' }]}>
        {/* photos */}
        <Photos imageSource={IMAGE_LOC(route.params.images[0]["path"])} />
        {/* details */}
        <Details
          name={route.params.name}
          price={PRODUCT_PRICE(route.params.price)}
          nie={route.params.nie}
          description={route.params.description}
        />
        {/* discuss */}
        <Discuss
          showActionSheet={showActionSheet}
          discussionData={discussionData} />
        {/* obat lainya */}
        {
          recomendations.length > 0
            ?
            (
              <Recomendations data={recomendations} click={CardClick} />
            )
            :
            ""
        }
        {/*  */}
        <ActionSheet closeAnimationConfig={true} headerAlwaysVisible={true} ref={actionSheetRef}>
          <FormDiskusi
            textValue={message}
            submit={handleSubmitDiskusi}
            onChange={setMessage} />
        </ActionSheet>
      </ScrollView>
    </SafeAreaView>
  );
}
// specific style
const Style = StyleSheet.create({
  imageMainProduct: {
    width: '100%',
    height: 200,
    maxWidth: 150,
    resizeMode: 'contain',
  },
  descriptionColumn: {
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    width: "100%",
  },
  personDiscussImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  cardDiscuss: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 10,
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
  cardHerbalEdu: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 3,
    padding: 25,
  },
  textCard: {
    width: '70%',
  },
  cardProduct: {
    borderWidth: 1,
    borderColor: '#F3F3F3',
    width: '48%',
    padding: 20,
  },
  imageProduct: {
    height: 100,
    width: 90,
    resizeMode: 'contain',
  },
  // form diskusi
  styleFormDiskusi: {
    height: 250,
    padding: 20
  },
  inputDiskusi: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#00A6A6",
    borderRadius: 4,
    height: 100
  },
  buttonSubmit: {
    backgroundColor: "#00A6A6",
    borderRadius: 4
  }
});
