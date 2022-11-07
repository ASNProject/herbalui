// library
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, RefreshControl } from "react-native";
import { useEffect, useCallback, useState } from "react";
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
import IconOnline from "../../../assets/icons/online.svg"
//style
import GS from "../style/GlobalStyle";
// component top bar
const TopBar = function (props) {
    return (<View style={[GS.mt2, GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween]}>
        <View>
            <Text style={[GS.fs4, GS.fwLight]}>Halo</Text>
            <Text style={[GS.fs2]}>Safitri Aulia 👋🏻</Text>
        </View>
        <View style={[GS.flexRow, GS.alignItemsCenter]}>
            <TouchableOpacity onPress={props.cartClick}>
                <Cart width="25" height="25" style={[GS.mr2]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.clickProfile}>
                <Image source={personImage} style={[Style.profileImage]} />
            </TouchableOpacity>
        </View>
    </View>)
}
// component search bar
const SearchBar = function (props) {
    return (
        <View style={[Style.searchBar, GS.flexRow, GS.alignItemsCenter, GS.mt4]}>
            <SearchIcon width="8%" style={[GS.ml3]} />
            <TextInput style={[Style.inputSearchBar, GS.pl1, GS.fs5]}
                selectionColor="#000"
                returnKeyType="go"
                onSubmitEditing={props.onSearching}
                underlineColor="none" underlineColorAndroid="none" activeUnderlineColor="none"
                placeholder="Cari obat atau gejala" placeholderTextColor="#A0A0A0sasa" />
        </View>
    )
}
// component menu
const Menu = function (props) {
    return (
        <View>
            <View style={[GS.mt4, GS.flexRow, GS.flexWrap]}>
                {/* product herbal */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity
                        onPress={props.clickProduk}
                        style={[Style.buttonMenu, Style.buttonMenuPrimary, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuProduct width="100%" height="60%" />
                        <Text style={[GS.whiteColor, GS.fs5, GS.mt1]}>Produk herbal</Text>
                    </TouchableOpacity>
                </View>
                {/* konsultasi */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity
                        onPress={props.clickKonsultasi}
                        style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuConsultation width="100%" height="60%" />
                        <Text style={[GS.whiteColor, GS.fs5, GS.mt1]}>Konsultasi</Text>
                    </TouchableOpacity>
                </View>
                {/* artikel */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity
                        onPress={props.articleClick}
                        style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuArtikel width="100%" height="60%" />
                        <Text style={[GS.whiteColor, GS.fs5, GS.mt1]}>Artikel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[GS.mt1, GS.flexRow, GS.flexWrap]}>
                {/* herbal edu */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity
                        onPress={props.clickHerbalEdu}
                        style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuHerbalEdu width="100%" height="60%" />
                        <Text style={[GS.whiteColor, GS.fs5, GS.mt1]}>Herbal Edu</Text>
                    </TouchableOpacity>
                </View>
                {/* halalcenter */}
                <View style={[Style.colButtonMenu]}>
                    <TouchableOpacity
                        onPress={props.clickHalalCenter}
                        style={[Style.buttonMenu, GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter]}>
                        <IconMenuHalalCenter width="100%" height="60%" />
                        <Text style={[GS.whiteColor, GS.fs5, GS.mt1]}>Halal center</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
// component obat herbal
const ObatHerbal = function (props) {
    return (
        <View style={[GS.mt4]}>
            <Text style={[GS.fwMedium, GS.fs3]}>Obat herbal</Text>
            <View style={[GS.flexRow, GS.mt2]}>
                {/* category jantung */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity
                        onPress={props.clickPencarian}
                        style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconJantung width="60%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor, GS.fs5]]}>Jantung</Text>
                    </TouchableOpacity>
                </View>
                {/* category demam */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity
                        onPress={props.clickPencarian}
                        style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconSakitKepala width="100%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor, GS.fs5]]}>Demam</Text>
                    </TouchableOpacity>
                </View>
                {/* category ginja; */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity
                        onPress={props.clickPencarian}
                        style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconGinjal width="100%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor, GS.fs5]]}>Ginjal</Text>
                    </TouchableOpacity>
                </View>
                {/* category stamina; */}
                <View style={[Style.colButtonCategoryObat]}>
                    <TouchableOpacity
                        onPress={props.clickPencarian}
                        style={[{ width: "100%", height: "100%" }, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, Style.buttonCategory]}>
                        <IconStamina width="60%" height="60%" />
                        <Text style={[[GS.mt1, GS.primaryColor, GS.fs5]]}>Stamina</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
// article / tambah wawasan
const TambahWawasan = function (props) {
    const imageSource = require("../../../assets/images/artikel_1.png");
    const imageSource2 = require("../../../assets/images/artikel_2.png");
    return (
        <View style={[GS.mt4]}>
            <Text style={[GS.fwMedium, GS.fs3]}>Tambah wawasan</Text>
            <ScrollView horizontal style={[GS.flexRow, GS.mt2]} showsHorizontalScrollIndicator="false">
                {/* article card */}
                <TouchableOpacity
                    onPress={props.articleClick}
                    style={[GS.mr2]}>
                    <ImageBackground style={[Style.cardArtikel]} source={imageSource}>
                        <View style={[Style.coverArtikel]}>
                            <Text style={[GS.whiteColor, GS.fs5, GS.fwBold]}>
                                Tips menjaga kesehatan mata
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                {/* article card */}
                <TouchableOpacity
                    onPress={props.articleClick}
                    style={[GS.mr2]}>
                    <ImageBackground style={[Style.cardArtikel]} source={imageSource2}>
                        <View style={[Style.coverArtikel]}>
                            <Text style={[GS.whiteColor, GS.fs5, GS.fwBold]}>
                                Tips makanan sehat & bergizi
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
// konultasi
const Consultation = function (props) {
    // variable
    const profile_robot = require("../../../assets/images/konsultasi_robot.png");
    const profile_1 = require("../../../assets/images/konsultasi_1.png");
    const profile_2 = require("../../../assets/images/konsultasi_2.png");
    // content
    return (
        <View style={[GS.mt4]}>
            <Text style={[GS.fwMedium, GS.fs3]}>Konsultasi online</Text>
            <ScrollView style={[GS.mt2, GS.flexRow]} horizontal showsHorizontalScrollIndicator="false">
                {/* card konsultasi */}
                <TouchableOpacity onPress={props.clickKonsultasiDetail} style={[GS.mr2]}>
                    <View style={[GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter, Style.cardKonsultasi]}>
                        {/* status */}
                        <View style={[GS.flexRow, GS.alignItemsCenter, { width: "80%" }]}>
                            <IconOnline width="8" height="8" />
                            <Text style={[GS.ml1, GS.fwLight, GS.fs6]}>online</Text>
                        </View>
                        {/* profile image */}
                        <Image source={profile_robot} style={[Style.konsultasiProfile, GS.mt2]} />
                        {/* name */}
                        <Text style={[GS.mt2, GS.fwLight, GS.fs5]}>Robot</Text>
                    </View>
                </TouchableOpacity>
                {/* card konsultasi */}
                <TouchableOpacity onPress={props.clickKonsultasiDetail} style={[GS.mr2]}>
                    <View style={[GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter, Style.cardKonsultasi]}>
                        {/* status */}
                        <View style={[GS.flexRow, GS.alignItemsCenter, { width: "80%" }]}>
                            <IconOnline width="8" height="8" />
                            <Text style={[GS.ml1, GS.fwLight, GS.fs6]}>online</Text>
                        </View>
                        {/* profile image */}
                        <Image source={profile_1} style={[Style.konsultasiProfile, GS.mt2]} />
                        {/* name */}
                        <Text style={[GS.mt2, GS.fwLight, GS.fs5]}>Yaseefa</Text>
                    </View>
                </TouchableOpacity>
                {/* card konsultasi */}
                <TouchableOpacity onPress={props.clickKonsultasiDetail} style={[GS.mr2]}>
                    <View style={[GS.flexColumn, GS.justifyContentCenter, GS.alignItemsCenter, Style.cardKonsultasi]}>
                        {/* status */}
                        <View style={[GS.flexRow, GS.alignItemsCenter, { width: "80%" }]}>
                            <IconOnline width="8" height="8" />
                            <Text style={[GS.ml1, GS.fwLight, GS.fs6]}>online</Text>
                        </View>
                        {/* profile image */}
                        <Image source={profile_2} style={[Style.konsultasiProfile, GS.mt2]} />
                        {/* name */}
                        <Text style={[GS.mt2, GS.fwLight, GS.fs5]}>Maemunah</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
//content
export default function Home({ navigation }) {
    const [ref, setRef] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            if (ref != null) {
                ref.scrollTo({ x: 0, y: 0, animated: false })
            }
            // Call any action
        });
        return unsubscribe;
    }, [navigation])
    // function
    const clickProfile = function () {
        navigation.navigate("Profile");
    }
    const cartClick = function () {
        navigation.navigate("Cart");
    }
    const articleClick = function () {
        navigation.navigate("Artikel");
    }
    const articleDetailClick = function () {
        navigation.navigate("ArtikelDetail");
    }
    const clickProduk = function () {
        navigation.navigate("Produk");
    }
    const clickKonsultasi = function () {
        navigation.navigate("Konsultasi");
    }
    const clickKonsultasiDetail = function () {
        navigation.navigate("ConsultationDetail");
    }
    const clickHerbalEdu = function () {
        navigation.navigate("Herbal edu");
    }
    const clickHalalCenter = function () {
        navigation.navigate("Halal center");
    }
    const onSearching = function () {
        navigation.navigate("Pencarian");
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
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            ref={(ref) => { setRef(ref) }} style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator="false" >
            <SafeAreaView style={[GS.container, { paddingBottom: 0 }]}>
                {/* top bar */}
                <TopBar cartClick={cartClick} clickProfile={clickProfile} />
                {/*  search bar */}
                <SearchBar onSearching={onSearching} />
                {/* menu */}
                <Menu clickProduk={clickProduk} articleClick={articleClick}
                    clickKonsultasi={clickKonsultasi} clickHerbalEdu={clickHerbalEdu}
                    clickHalalCenter={clickHalalCenter}
                />
                {/* obat herbal */}
                <ObatHerbal clickPencarian={onSearching} />
                {/* articles */}
                <TambahWawasan articleClick={articleDetailClick} />
                {/* konsultasi online */}
                <Consultation clickKonsultasiDetail={clickKonsultasiDetail} />
            </SafeAreaView>
        </ScrollView >
    )
}
// style
const Style = StyleSheet.create({
    // top bar
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 1000,
        resizeMode: "cover",
    },
    // search bar
    searchBar: {
        borderWidth: 1,
        borderColor: "#00A6A6",
        borderRadius: 5,
        overflow: "hidden",
        width: "100%",
        height: 45
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
        height: 115,
        padding: 5,
    },
    buttonMenu: {
        backgroundColor: "#00BEBE",
        borderRadius: 12,
        width: "100%",
        height: "100%",
        paddingVertical: 5
    },
    buttonMenuPrimary: {
        backgroundColor: "#00A6A6",
    },
    // recomend kategory obat herbal
    colButtonCategoryObat: {
        width: "25%",
        height: 115,
        padding: 3,
    },
    buttonCategory: {
        borderColor: "#F3F3F3",
        borderWidth: 1
    },
    // artikel
    cardArtikel: {
        height: 100,
        width: 200,
        borderRadius: 10,
        overflow: "hidden"
    },
    coverArtikel: {
        backgroundColor: "#00a6a699",
        width: "100%",
        height: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    // konsultasi
    cardKonsultasi: {
        width: 125,
        borderWidth: 1,
        borderColor: "#F3F3F3",
        paddingVertical: 10
    },
    konsultasiProfile: {
        width: 60,
        height: 60,
    },
})