// lib
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, RefreshControl } from "react-native";
import { useState, useCallback } from "react";
import GS from "./style/GlobalStyle";
import CardArtikel from "./component/Card-Artikel";
import TopBar from "./component/TopBar1";
// images
import Search from "../../assets/icons/ph_magnifying-glass-bold.svg"
import Times from "../../assets/icons/la_times.svg";
const headerImage = require("../../assets/images/header_herbal_edu.png")
import artikel_1 from "../../assets/images/artikel_1.png";
// component input search
const InputSearch = function (props) {
  return (
    <View style={[GS.container, Style.InputSearch]}>
      <View style={[GS.flexRow, GS.alignItemsCenter]}>
        <Search width="10%" height="25" />
        <TextInput
          selectionColor={"#00A6A6"}
          style={[GS.pl2, Style.textInput]} placeholder="Cari kata kunci"
          returnKeyType="go"
          onSubmitEditing={(event) => {
            alert("searching")
          }}
        />
        <TouchableOpacity onPress={props.onTimesClick} width="10%" height="25">
          <Times height="25" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
// component contents
const Contents = function (props) {
  return (
    <View style={[GS.container, GS.mt4]}>
      {/* card */}
      <CardArtikel />
    </View>
  );
}
// content
export default function Artikel({ navigation }) {
  // variable
  const [openSearch, setOpenSearch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // function
  const ToggleSearch = function () {
    setOpenSearch(!openSearch);
  }
  const CardClick = function () {
    navigation.navigate("ArtikelDetail");
  }
  const backClick = function () {
    navigation.navigate("HomeMain");
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      alert("refreshing done")
      setRefreshing(false);
    }, 1000);
  }, []);
  //
  return (
    <SafeAreaView style={[GS.h100, GS.bgWhite]}>
      <TopBar title="Artikel"
        backButton={true}
        backClick={backClick}
        openSearch={openSearch}
        onSearchClick={ToggleSearch}
        onTimesClick={ToggleSearch} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator="false">
        {/* content */}
        <View style={[GS.container, GS.mt4]}>
          {/* card */}
          <CardArtikel whenCardClick={CardClick} image={artikel_1}
            title="5 manfaat meditasi yang belum banyak orang tahu"
            publishDate="Dipublikaiskan 10 mei 2022"
          />
        </View>
      </ScrollView >
    </SafeAreaView>
  )
}
// style
const Style = StyleSheet.create({
  // header
  header: {
    width: "100%"
  },
  // search
  InputSearch: {
    paddingVertical: 15,
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: 1,
    height: 60
  },
  textInput: {
    width: "80%"
  },
});