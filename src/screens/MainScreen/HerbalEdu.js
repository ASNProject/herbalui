// lib
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import GS from "../style/GlobalStyle";
// images
import Search from "../../../assets/icons/ph_magnifying-glass-bold.svg"
import ArrowRight from "../../../assets/icons/arrow_right.svg"
const headerImage = require("../../../assets/images/header_herbal_edu.png")
// component topbar
const TopBar = function () {
    return (
        <View style={[GS.container, GS.TopBar, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
            <Text style={[GS.fwMedium, GS.fs4]}>Herbal edu</Text>
            <TouchableOpacity>
                <Search />
            </TouchableOpacity>
        </View>
    );
}
// component input search
const InputSearch = function () {
    return (
        <View style={[GS.container]}>
            <View style={[GS.flexRow]}>
                <Search />
                <TextInput placeholder="Cari kata kunci" />
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
                <View style={[GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween, Style.cardHerbalEdu]}>
                    <Text style={[Style.textCard]}>
                        Sejarah obat herbal di dunia dan di indonesia
                    </Text>
                    <ArrowRight width="30" height="30" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
// content
export default function HerbalEdu() {
    return (
        <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator="false">
            <SafeAreaView style={[{ paddingBottom: 0 }]}>
                {/* top bar */}
                <TopBar />
                {/* input search */}
                <InputSearch />
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
});