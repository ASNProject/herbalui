// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import CardArtikel from "./component/Card-Artikel";
// icons
import BackIcon from "../../assets/icons/back_button.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../assets/images/afia_kids.png")
import FavoriteYellowIcon from "../../assets/icons/favorite_yellow.svg"
import artikel_1 from "../../assets/images/artikel_1.png";
import artikel_2 from "../../assets/images/artikel_2.png";
import artikel_3 from "../../assets/images/artikel_3.png";
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
                        <Text style={[GS.fwMedium, GS.fs4]}>Artikel disimpan</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

// content  
export default function FavoriteArtikel({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Favorite");
    }
    // function
    const ToggleSearch = function () {
        setOpenSearch(!openSearch);
    }
    const CardClick = function () {
        navigation.navigate("ArtikelDetail");
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <View style={[GS.container, GS.mt4]}>
                        {/* card */}
                        <CardArtikel whenCardClick={CardClick} image={artikel_2}
                            title="5 manfaat meditasi yang belum banyak orang tahu"
                            publishDate="Dipublikaiskan 10 mei 2022"
                            showFavorite={true}
                        />
                    </View>
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