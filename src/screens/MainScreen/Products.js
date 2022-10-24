// lib
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import GS from "../style/GlobalStyle";
// images
import Search from "../../../assets/icons/ph_magnifying-glass-bold.svg"
import ArrowRight from "../../../assets/icons/arrow_right.svg"
import Times from "../../../assets/icons/la_times.svg";
const example_product_1 = require("../../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../../assets/images/afia_kids.png")

// component topbar
const TopBar = function (props) {
    return (
        <View style={[GS.TopBar]}>
            <View style={[GS.container, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                <Text style={[GS.fwMedium, GS.fs4]}>Produk herbal</Text>
                <TouchableOpacity onPress={props.onSearchClick}>
                    <Search />
                </TouchableOpacity>
            </View>
        </View>
    );
}
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
            <View style={[GS.flexRow, GS.justifySpaceBetween]}>
                {/* card */}
                <TouchableOpacity onPress={props.whenCardClick} style={[Style.cardProduct, GS.flexColumn, GS.alignItemsCenter]}>
                    <Image style={[Style.imageProduct]} source={example_product_1} />
                    <Text style={[GS.fs5]}>Olivia Turseena</Text>
                    <Text style={[GS.fs5, GS.primaryColor]}>Rp 19.000</Text>
                </TouchableOpacity>
                {/* card */}
                <TouchableOpacity onPress={props.whenCardClick} style={[Style.cardProduct, GS.flexColumn, GS.alignItemsCenter]}>
                    <Image style={[Style.imageProduct]} source={example_product_2} />
                    <Text style={[GS.fs5]}>Olivia Turseena</Text>
                    <Text style={[GS.fs5, GS.primaryColor]}>Rp 19.000</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
// content
export default function Products({ navigation }) {
    // variable
    const [openSearch, setOpenSearch] = useState(false);
    // function
    const ToggleSearch = function () {
        setOpenSearch(!openSearch);
    }
    const CardClick = function () {
        navigation.navigate("Produk");
    }
    //
    return (
        <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator="false">
            <SafeAreaView style={[{ paddingBottom: 0 }]}>
                {
                    !openSearch
                        // top bar
                        ? <TopBar onSearchClick={ToggleSearch} />
                        // input search
                        : <InputSearch onTimesClick={ToggleSearch} />
                }
                {/* content */}
                <Contents whenCardClick={CardClick} />
            </SafeAreaView>
        </ScrollView>
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
    // card
    cardHerbalEdu: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 3,
        padding: 25,
    },
    textCard: {
        width: "70%"
    },
    cardProduct: {
        borderWidth: 1,
        borderColor: "#F3F3F3",
        width: "48%",
        padding: 20
    },
    imageProduct: {
        height: 100,
    }
});