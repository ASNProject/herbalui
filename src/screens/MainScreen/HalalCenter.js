// lib
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import GS from "../style/GlobalStyle";
// images
import Search from "../../../assets/icons/ph_magnifying-glass-bold.svg"
import ArrowRight from "../../../assets/icons/arrow_right.svg"
import Times from "../../../assets/icons/la_times.svg";
const headerImage = require("../../../assets/images/header_halal_center.png")
// component topbar
const TopBar = function (props) {
    return (
        <View style={[GS.container, GS.TopBar, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
            <Text style={[GS.fwMedium, GS.fs4]}>Halal center</Text>
            <TouchableOpacity onPress={props.onSearchClick}>
                <Search />
            </TouchableOpacity>
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
                    style={[GS.pl2, Style.textInput]} placeholder="Cari kata kunci" />
                <TouchableOpacity onPress={props.onTimesClick} width="10%" height="25">
                    <Times height="25" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
// component contents
const Contents = function () {
    return (
        <View style={[GS.container, GS.mt4]}>
            {/* card */}
            <TouchableOpacity>
                <View style={[GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween, Style.cardHalalCenter]}>
                    <Text style={[Style.textCard, GS.fs5]}>
                        Sejarah obat herbal di dunia dan di indonesia
                    </Text>
                    <ArrowRight width="30" height="30" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
// content
export default function HalalCenter() {
    // variable
    const [openSearch, setOpenSearch] = useState(false);
    // function
    const ToggleSearch = function () {
        setOpenSearch(!openSearch);
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
                {/* header */}
                <Image source={headerImage} style={[Style.header]} />
                {/* content */}
                <Contents />
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
    cardHalalCenter: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 3,
        padding: 25,
    },
    textCard: {
        width: "70%"
    },
});