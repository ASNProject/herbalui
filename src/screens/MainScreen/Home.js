// library
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
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
import IconJantung from "../../../assets/icons/icon-park-outline_heart.svg"
import IconSakitKepala from "../../../assets/icons/openmoji_headache.svg"
import IconGinjal from "../../../assets/icons/openmoji_kidney.svg"
import IconStamina from "../../../assets/icons/icon-park-outline_muscle.svg"
//style
import GS from "../style/GlobalStyle";
// component top bar
const TopBar = function () {
    return (<View style={[GS.mt2, GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween]}>
        <View>
            <Text>Halo</Text>
            <Text>Safitri Aulia 👋🏻</Text>
        </View>
        <View style={[GS.flexRow, GS.alignItemsCenter]}>
            <Cart width="25" height="25" style={[GS.mr2]} />
            <Image source={personImage} style={[Style.profileImage]} />
        </View>
    </View>)
}
// component search bar
const SearchBar = function () {
    return (
        <View style={[Style.searchBar, GS.flexRow, GS.alignItemsCenter, GS.mt4]}>
            <SearchIcon width="8%" style={[GS.ml3]} />
            <TextInput style={[Style.inputSearchBar, GS.pl1]}
                selectionColor="#000"
                underlineColor="none" underlineColorAndroid="none" activeUnderlineColor="none"
                placeholder="Cari obat atau gejala" placeholderTextColor="#A0A0A0sasa" />
        </View>
    )
}
// component menu
const Menu = function () {
    return (
        <View>
            <View style={[GS.mt4, GS.flexRow, GS.flexWrap]}>
                {/* product herbal */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity style={[Style.buttonMenu, Style.buttonMenuPrimary, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuProduct width="100%" height="60%" />
                        <Text style={GS.whiteColor}>Produk herbal</Text>
                    </TouchableOpacity>
                </View>
                {/* konsultasi */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuConsultation width="100%" height="60%" />
                        <Text style={GS.whiteColor}>Konsultasi</Text>
                    </TouchableOpacity>
                </View>
                {/* artikel */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuArtikel width="100%" height="60%" />
                        <Text style={GS.whiteColor}>Artikel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[GS.mt1, GS.flexRow, GS.flexWrap]}>
                {/* herbal edu */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuHerbalEdu width="100%" height="60%" />
                        <Text style={GS.whiteColor}>Herbal Edu</Text>
                    </TouchableOpacity>
                </View>
                {/* artikel */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuHalalCenter width="100%" height="60%" />
                        <Text style={GS.whiteColor}>Halal center</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
// component obat herbal
const ObatHerbal = function () {
    return (
        <View style={[GS.mt4]}>
            <Text>Obat herbal</Text>
            <View style={[GS.flexRow, GS.mt2]}>
                {/* category jantung */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconJantung width="60%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor]]}>Jantung</Text>
                    </TouchableOpacity>
                </View>
                {/* category demam */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconSakitKepala width="100%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor]]}>Demam</Text>
                    </TouchableOpacity>
                </View>
                {/* category ginja; */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconGinjal width="100%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor]]}>Ginjal</Text>
                    </TouchableOpacity>
                </View>
                {/* category stamina; */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconStamina width="60%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor]]}>Stamina</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
//content
export default function Home() {
    return (
        <SafeAreaView style={[GS.container]}>
            {/* top bar */}
            <TopBar />
            {/*  search bar */}
            <SearchBar />
            {/* menu */}
            <Menu />
            {/* obat herbal */}
            <ObatHerbal />
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
    },
    colButtonMenu: {
        width: "33.3%",
        height: 105,
        padding: 5
    },
    buttonMenu: {
        backgroundColor: "#00BEBE",
        borderRadius: 12,
        width: "100%",
        height: "100%"
    },
    buttonMenuPrimary: {
        backgroundColor: "#00A6A6",
    },
    // recomend kategory obat herbal
    colButtonCategoryObat: {
        width: "25%",
        height: 115,
        padding: 5,
    },
    buttonCategory: {
        borderColor: "#F3F3F3",
        borderWidth: 1
    }
})