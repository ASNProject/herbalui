// lib
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, RefreshControl } from "react-native";
import { useState, useCallback } from "react";
import GS from "../style/GlobalStyle";
import TopBar from "../component/TopBar1";
import CardProduct from "../component/Card-Product";
// images
const example_product_1 = require("../../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../../assets/images/afia_kids.png")
const example_product_3 = require("../../../assets/images/temu-putih.png")
// component contents
const Contents = function (props) {
    return (
        <View style={[GS.container, GS.mt4]}>
            <View style={[GS.flexRow, GS.flexWrap]}>
                {/* card */}
                <CardProduct whenCardClick={props.whenCardClick}
                    image={example_product_1}
                    title="Olivia Turseena"
                    price="Rp 20.000"
                />
                {/* card */}
                <CardProduct whenCardClick={props.whenCardClick}
                    image={example_product_2}
                    title="Afia kids"
                    price="Rp 50.000"
                />
                {/* card */}
                <CardProduct whenCardClick={props.whenCardClick}
                    image={example_product_3}
                    title="Temu putih"
                    price="Rp 35.000"
                />
            </View>
        </View>
    );
}
// content
export default function Products({ navigation }) {
    // variable
    const [openSearch, setOpenSearch] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    // function
    const ToggleSearch = function () {
        setOpenSearch(!openSearch);
    }
    const CardClick = function () {
        navigation.navigate("ProductDetail");
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
        <SafeAreaView style={[{ paddingBottom: 0, backgroundColor: "#fff" }]} >
            <View style={[{}]}>
                <TopBar title="Produk Herbal" openSearch={openSearch} onSearchClick={ToggleSearch} onTimesClick={ToggleSearch} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    style={[{ backgroundColor: "#fff", height: "100%" }]} showsVerticalScrollIndicator="false">
                    {/* content */}
                    <Contents whenCardClick={CardClick} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
// style
const Style = StyleSheet.create({
    // header
    header: {
        width: "100%"
    },
});