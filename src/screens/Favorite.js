// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import GS from "./style/GlobalStyle";
// icons
import BackIcon from "../../assets/icons/back_button.svg"
import FavoriteArticle from "../../assets/icons/favorite_artikel"
import FavoriteProduct from "../../assets/icons/favorite_product"
// component topbar
const TopBar = function (props) {
    return (
        <View style={[GS.TopBar]}>
            <View style={[GS.container, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                <View style={[GS.flexRow, GS.alignItemsCenter]}>
                    <TouchableOpacity onPress={props.backClick}>
                        <BackIcon />
                    </TouchableOpacity>
                    <View style={[GS.flexRow, GS.alignItemsCenter, GS.ml2]}>
                        <Text style={[GS.fwMedium, GS.fs4]}>My Favorite</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Content = function (props) {
    return (
        <View style={[GS.container, GS.mt4]}>
            {/* button */}
            <TouchableOpacity onPress={props.OpenProduct} style={[GS.flexRow, GS.alignItemsCenter, Style.buttonFavorite, GS.mb4]}>
                <FavoriteProduct width="60" height="60" />
                <Text style={[GS.ml4, GS.fwMedium, GS.fs2]}>Produk</Text>
            </TouchableOpacity>
            {/* button */}
            <TouchableOpacity onPress={props.OpenArtikel} style={[GS.flexRow, GS.alignItemsCenter, Style.buttonFavorite, GS.mb4]}>
                <FavoriteArticle width="60" height="60" />
                <Text style={[GS.ml4, GS.fwMedium, GS.fs2]}>Artikel</Text>
            </TouchableOpacity>
        </View>
    )
}

// content  
export default function Favorite({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Profile");
    }
    const OpenProduct = function () {
        navigation.navigate("FavoriteProduct");
    }
    const OpenArtikel = function () {
        navigation.navigate("FavoriteArtikel");
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <Content OpenArtikel={OpenArtikel} OpenProduct={OpenProduct} />
                </SafeAreaView>
            </ScrollView>
        </View >
    );
}
// specific style
const Style = StyleSheet.create({
    buttonFavorite: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 5,
        shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.06, shadowRadius: 20
    }
})