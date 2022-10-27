// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
// images
import BackIcon from "../../assets/icons/back_button.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
import MinusIcon from "../../assets/icons/minus.svg"
import PlusIcon from "../../assets/icons/plus.svg"
import ArrowIcon from "../../assets/icons/arrow_right_white.svg"
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
                        <Text style={[GS.fwMedium, GS.fs4]}>Checkout</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
//
const MainContent = function () {
    return (
        <View style={[GS.container, GS.mt4, GS.flexColumn, GS.alignItemsCenter]}>
            <View style={[{ width: "100%" }, GS.my3]}>
                <Text style={[GS.fs3, GS.secondaryColor]}>Barang</Text>
            </View>
            {/* card */}
            <View style={[Style.cardProduct, GS.mb4]}>
                <View style={[GS.flexRow, GS.alignItemsCenter]}>
                    <Image source={example_product_1} style={[Style.productImage]} />
                    <View style={[GS.ml3]}>
                        <Text style={[GS.fs4, GS.fwRegular]}>Olvia turseena</Text>
                        <Text style={[GS.fs5, GS.primaryColor, GS.mt1, GS.fs5]}>Rp 19.000</Text>
                        <View style={[GS.flexRow, GS.alignItemsCenter, GS.mt1]}>
                            <Text style={[GS.fs6]}>1 item</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* form data pembeli */}
            <View style={[GS.w100, GS.my3]}>
                <Text style={[GS.fs3, GS.secondaryColor]}>Data pembeli</Text>
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Nama</Text>
                <TextInput style={[Style.inputForm]} placeholder="Muhammad Alendra" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Email</Text>
                <TextInput style={[Style.inputForm]} placeholder="alendra099@gmail.com" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>No hp</Text>
                <TextInput style={[Style.inputForm]} placeholder="No hp" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Alamat lengkap</Text>
                <TextInput style={[Style.inputForm, { height: 50 }]}
                    multiline={true} placeholder="Alamat lengkap" />
            </View>
            {/* button konfirmasi */}
            <View style={[GS.py4, GS.container, { width: "100%" }]}>
                <TouchableOpacity style={[Style.buttonCheckout, GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter]}>
                    <Text style={[GS.whiteColor, GS.fs3]}>Konfirmasi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// content  
export default function Checkout({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Cart");
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <MainContent />
                </SafeAreaView>
            </ScrollView>
        </View >
    );
}
// specific style
const Style = StyleSheet.create({
    profileImage: {
        width: 75,
        height: 75
    },
    cardMyMessage: {
        backgroundColor: "#00A6A6",
        width: "75s%",
        padding: 15,
        borderRadius: 10
    },
    buttonUpdate: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    buttonBorder: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "100%",
        maxWidth: 300,
        padding: 15,
        borderRadius: 1000
    },
    buttonBorderless: {
        width: "100%",
        maxWidth: 300,
        padding: 15,
        borderRadius: 1000
    },
    cardProduct: {
        borderColor: "#F3F3F3",
        borderWidth: 1,
        width: "100%",
        padding: 20
    },
    productImage: {
        height: 90,
        width: 90,
        resizeMode: "contain"
    },
    inputAmount: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        paddingHorizontal: 4,
        height: 20,
        width: 60,
        paddingVertical: 3,
        borderRadius: 1000,
    },
    btnEditAmount: {
        height: 30,
        flexDirection: "row",
        alignItems: "center"
    },
    buttonCheckout: {
        backgroundColor: "#00A6A6",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 1000,
    },
    inputForm: {
        borderWidth: 1,
        borderColor: "#00A6A6",
        padding: 10,
        borderRadius: 3,
        paddingVertical: 10
    }
})