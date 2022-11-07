// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
import CardProduct from "./component/Card-Product";
// images
import BackIcon from "../../assets/icons/back_button.svg"
import FavoriteIcon from "../../assets/icons/favorite.svg"
import FavoriteYellowIcon from "../../assets/icons/favorite_yellow.svg"
import CartIconBlack from "../../assets/icons/cart_black.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../assets/images/afia_kids.png")
const example_product_3 = require("../../assets/images/temu-putih.png")
const example_discuss_person = require("../../assets/images/example_discuss_person.png")
// component photos
const Photos = function () {
    return (
        <View style={[GS.mt0, { backgroundColor: "#FAFAFA" }]}>
            <View style={[GS.container, { backgroundColor: "#FAFAFA" }]}>
                <View style={[GS.flexRow, GS.justifyContentCenter]}>
                    <Image source={example_product_1} style={[Style.imageMainProduct]} />
                </View>
            </View>
        </View>
    )
}
// component details
const Details = function () {
    return (
        <View style={[GS.container, GS.mt4]}>
            <View>
                <Text style={[GS.fwMedium, GS.fs3]}>Oliviea Turseena</Text>
                <Text style={[GS.fs3]}>Rp 20.000</Text>
            </View>
            <View style={[GS.mt4]}>
                <Text style={[GS.fs5]}>Deskripsi</Text>
                <View style={[GS.flexRow]}>
                    <Text style={[{ width: "40%" }, GS.fs5, GS.fwLight]}>Nomor ijin edar</Text>
                    <Text style={[GS.fs5, GS.fwLight]}>12345</Text>
                </View>
            </View>
            <View style={[GS.mt3, Style.descriptionColumn, GS.pt2]}>
                <Text style={[GS.fs5, GS.fwLight]}>Lorem ipsum ini adalah deskripsi obatnya ya</Text>
            </View>
        </View>
    )
}
// component discuss
const Discuss = function () {
    return (
        <View style={[GS.container, GS.mt4]}>
            <View>
                <View style={[GS.flexRow, GS.justifySpaceBetween]}>
                    <Text style={[GS.fs5]}>Diskusi</Text>
                    <Text style={[GS.fs5, GS.primaryColor]}>Buat pertanyaan</Text>
                </View>
                {/* discussion card */}
                <View style={[GS.mt4]}>
                    {/* profile */}
                    <View style={[GS.flexRow]}>
                        <Image source={example_discuss_person} style={[Style.personDiscussImage]} />
                        <View style={[GS.ml2]}>
                            <Text>Aditya</Text>
                            <Text>3 jam yang lalu</Text>
                        </View>
                    </View>
                    <Text style={[GS.mt3, GS.fwLight]}>ini bisa untuk sakit hati engga ya? trims</Text>
                    {/* answer */}
                    <View style={[Style.cardDiscuss, GS.flexRow, GS.justifySpaceBetween, GS.mt3]}>
                        <View>
                            <Text style={[GS.fs5, GS.fwLight]}>Bisa kak</Text>
                        </View>
                        <View>
                            <Text style={[GS.fwLight, GS.fs5]}>Admin</Text>
                            <Text style={[GS.fs6, GS.fwLight]}>3 jam yang lalu</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
// component recomendations
const Recomendations = function (props) {
    return (
        <View style={[GS.container, GS.mt4]}>
            <Text style={[GS.fs5]}>Obat lainya</Text>
            <View style={[GS.flexRow, GS.flexWrap]}>
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
    )
}
// content
export default function ProductDetail({ navigation }) {
    // function 
    const backClick = function () {
        navigation.navigate("Produk");
    }
    const CardClick = function () {
        navigation.navigate("ProductDetail");
    }
    // 
    return (
        <SafeAreaView style={[{ backgroundColor: "#fff", height: "100%" }]}>
            {/* top bar */}
            <TopBar title="Olivia turseena"
                backButton={true}
                backClick={backClick}
                nosearch={true}
                showFavorite={true}
                showCart={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff", height: "100%" }]}>
                {/* photos */}
                <Photos />
                {/* details */}
                <Details />
                {/* discuss */}
                <Discuss />
                {/* obat lainya */}
                <Recomendations whenCardClick={CardClick} />
            </ScrollView>
        </SafeAreaView>
    );
}
// specific style
const Style = StyleSheet.create({
    imageMainProduct: {
        width: "100%",
        maxWidth: 150,
        resizeMode: "contain"
    },
    descriptionColumn: {
        borderTopWidth: 1,
        borderTopColor: "#D9D9D9"
    },
    personDiscussImage: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    cardDiscuss: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        padding: 10
    },
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
    }
})