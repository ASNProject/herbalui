// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
import CardArtikel from "./component/Card-Artikel";
import CardProduct from "./component/Card-Product";
// icons
import BackIcon from "../../assets/icons/back_button.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../assets/images/afia_kids.png")
import FavoriteYellowIcon from "../../assets/icons/favorite_yellow.svg"
import artikel_1 from "../../assets/images/artikel_1.png";
import artikel_2 from "../../assets/images/artikel_2.png";
import artikel_3 from "../../assets/images/artikel_3.png";
// content  
export default function Pencarian({ navigation }) {
    // function 
    const backClick = function () {
        navigation.navigate("HomeMain");
    }
    const CardClick = function () {
        navigation.navigate("ArtikelDetail");
    }
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title='Hasil untuk "Jantung"'
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <View style={[GS.container, GS.mt4]}>
                    {/* products */}
                    <View>
                        <Text style={[GS.fs4]}>Produk berkaitan</Text>
                        <View style={[GS.flexRow, GS.flexWrap, GS.mt3]}>
                            {/* card */}
                            <CardProduct whenCardClick={CardClick}
                                image={example_product_1} title="Olivia Turseena" price="Rp 19.000"
                            />
                            {/* card */}
                            <CardProduct whenCardClick={CardClick}
                                image={example_product_2} title="Afia kids" price="Rp 19.000"
                            />
                            {/* card */}
                            <CardProduct whenCardClick={CardClick}
                                image={example_product_2} title="Afia kids" price="Rp 19.000"
                            />
                        </View>
                    </View>
                    {/* articles */}
                    <View style={[Style.artikelSection, GS.mt5, GS.pt4]}>
                        <Text style={[GS.fs4]}>Artikel berkaitan</Text>
                        <View>
                            {/* card */}
                            <CardArtikel whenCardClick={CardClick} image={artikel_1}
                                title="5 manfaat meditasi yang belum banyak orang tahu"
                                publishDate="Dipublikaiskan 10 mei 2022"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    artikelSection: {
        borderTopWidth: 1,
        borderTopColor: "#D9D9D9"
    }
})