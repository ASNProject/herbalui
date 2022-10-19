// library
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
//images
import Cart from "../../../assets/icons/bi_cart.svg";
import SearchIcon from "../../../assets/icons/ph_magnifying-glass-bold.svg"
import IconMenuProduct from "../../../assets/icons/menu_product.svg"
import IconMenuConsultation from "../../../assets/icons/menu_konsultasi.svg"
import IconMenuArtikel from "../../../assets/icons/menu_artikel.svg"
import IconMenuHerbalEdu from "../../../assets/icons/menu_herbal_edu.svg"
import IconMenuHalalCenter from "../../../assets/icons/menu_halal_center.svg"
const personImage = require("../../../assets/images/example-person.png")
//style
import GS from "../style/GlobalStyle";
//content
export default function Home() {
    return (
        <SafeAreaView style={[GS.container]}>
            {/* top bar */}
            <View style={[GS.mt2, GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween]}>
                <View>
                    <Text>Halo</Text>
                    <Text>Safitri Aulia 👋🏻</Text>
                </View>
                <View style={[GS.flexRow, GS.alignItemsCenter]}>
                    <Cart width="25" height="25" style={[GS.mr2]} />
                    <Image source={personImage} style={[Style.profileImage]} />
                </View>
            </View>
            {/*  search bar */}
            <View style={[Style.searchBar, GS.flexRow, GS.alignItemsCenter, GS.mt5]}>
                <SearchIcon width="8%" style={[GS.ml3]} />
                <TextInput style={[Style.inputSearchBar, GS.pl1]}
                    selectionColor="#000"
                    underlineColor="none" underlineColorAndroid="none" activeUnderlineColor="none"
                    placeholder="Cari obat atau gejala" placeholderTextColor="#A0A0A0sasa" />
            </View>
            {/* menu */}
            <View style={[GS.mt5, GS.flexRow, GS.flexWrap]}>
                <TouchableOpacity style={[{ width: "33%", height: 105 }]}>
                    <IconMenuProduct width="100%" height="100%" />
                </TouchableOpacity>
                <TouchableOpacity style={[{ width: "33%", height: 105 }, { marginLeft: "0.5%" }]}>
                    <IconMenuConsultation width="100%" height="100%" />
                </TouchableOpacity>
                <TouchableOpacity style={[{ width: "33%", height: 105 }, { marginLeft: "0.5%" }]}>
                    <IconMenuArtikel width="100%" height="100%" />
                </TouchableOpacity>
                <TouchableOpacity style={[{ width: "33%", height: 105 }, GS.mt2]}>
                    <IconMenuHerbalEdu width="100%" height="100%" />
                </TouchableOpacity>
                <TouchableOpacity style={[{ width: "33%", height: 105 }, { marginLeft: "0.5%" }, GS.mt2]}>
                    <IconMenuHalalCenter width="100%" height="100%" />
                </TouchableOpacity>
            </View>
            {/* obat herbal */}
            <View style={[GS.mt5]}>
                <Text>Obat herbal</Text>
            </View>
            {/* articles */}
            {/* konsultasi online */}
        </SafeAreaView>
    )
}
// style
const Style = StyleSheet.create({
    // top bar
    topBar: {
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 1000
    },
    // search bar
    searchBar: {
        borderWidth: 1,
        borderColor: "#00A6A6",
        borderRadius: 10,
        overflow: "hidden",
        width: "100%",
    },
    inputSearchBar: {
        width: "90%",
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        borderBottomColor: "#fff",
    },
    // menu
    iconMenu: {
        width: 40,
        height: 40,
    }
})