// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
// icons
import BackIcon from "../../assets/icons/back_button.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../assets/images/afia_kids.png")
import FavoriteYellowIcon from "../../assets/icons/favorite_yellow.svg"
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
                        <Text style={[GS.fwMedium, GS.fs4]}>Produk disimpan</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Content = function (props) {
    return (
        <View style={[GS.container, GS.mt4]}>
            <View style={[GS.flexRow, GS.justifySpaceBetween]}>
                {/* card */}
                <TouchableOpacity onPress={props.whenCardClick} style={[Style.cardProduct, GS.flexColumn, GS.alignItemsCenter]}>
                    <Image style={[Style.imageProduct]} source={example_product_1} />
                    <Text style={[GS.fs5]}>Olivia Turseena</Text>
                    <Text style={[GS.fs5, GS.primaryColor]}>Rp 19.000</Text>
                    <TouchableOpacity style={[Style.favoriteIcon]}>
                        <FavoriteYellowIcon width="20" height="20" />
                    </TouchableOpacity>
                </TouchableOpacity>
                {/* card */}
                <TouchableOpacity onPress={props.whenCardClick} style={[Style.cardProduct, GS.flexColumn, GS.alignItemsCenter]}>
                    <Image style={[Style.imageProduct]} source={example_product_2} />
                    <Text style={[GS.fs5]}>Afia kids</Text>
                    <Text style={[GS.fs5, GS.primaryColor]}>Rp 19.000</Text>
                    <TouchableOpacity style={[Style.favoriteIcon]}>
                        <FavoriteYellowIcon width="20" height="20" />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// content  
export default function FavoriteProduct({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Favorite");
    }
    // function
    const ToggleSearch = function () {
        setOpenSearch(!openSearch);
    }
    const CardClick = function () {
        navigation.navigate("ProductDetail");
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <Content whenCardClick={CardClick} />
                </SafeAreaView>
            </ScrollView>
        </View >
    );
}
// specific style
const Style = StyleSheet.create({
    //  favorite button
    buttonFavorite: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 5,
        shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.06, shadowRadius: 20
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
        padding: 20,
    },
    imageProduct: {
        height: 100,
        width: 90,
        resizeMode: "contain",
    },
    favoriteIcon: {
        position: "absolute",
        right: 10,
        top: 10
    }
})