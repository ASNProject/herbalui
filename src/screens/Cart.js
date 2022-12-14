// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
// images
import BackIcon from "../../assets/icons/back_button.svg"
import ProfileImage from "../../assets/images/profile.png"
import PenIcon from "../../assets/icons/ep_edit-pen.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
import MinusIcon from "../../assets/icons/minus.svg"
import PlusIcon from "../../assets/icons/plus.svg"
import ArrowIcon from "../../assets/icons/arrow_right_white.svg"
//
const MainContent = function () {
    return (
        <View style={[GS.container, GS.mt4, GS.flexColumn, GS.alignItemsCenter]}>
            {/* card */}
            <View style={[Style.cardProduct, GS.mb4]}>
                <View style={[GS.flexRow, GS.alignItemsCenter]}>
                    <Image source={example_product_1} style={[Style.productImage]} />
                    <View style={[GS.ml3]}>
                        <Text style={[GS.fs4, GS.fwRegular]}>Olvia turseena</Text>
                        <Text style={[GS.fs5, GS.primaryColor, GS.mt1]}>Rp 19.000</Text>
                        <View style={[GS.flexRow, GS.alignItemsCenter, GS.mt1]}>
                            <TextInput placeholder="0" style={[Style.inputAmount, GS.fs6, GS.textCenter]} keyboardType="number-pad" cursorColor="#00A6A6" selectionColor="#00A6A6" />
                            <TouchableOpacity style={[GS.ml2, Style.btnEditAmount]}>
                                <MinusIcon width="15" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[GS.ml2, Style.btnEditAmount]}>
                                <PlusIcon width="15" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* total */}
            <View style={[GS.flexRow, GS.justifySpaceBetween, { width: "100%" }, GS.mt2]}>
                <Text style={[GS.fs3, GS.secondaryColor]}>Total</Text>
                <View style={[GS.flexRow, GS.alignItemsEnd]}>
                    <Text style={[GS.fs5, GS.fwLight, GS.mr1]}>Rp</Text>
                    <Text style={[GS.fs3]}>19.000</Text>
                </View>
            </View>
        </View>
    )
}
// content  
export default function Cart({ navigation }) {
    // function 
    const backClick = function () {
        navigation.navigate("HomeMain");
    }
    const checkout = function () {
        navigation.navigate("Checkout");
    }
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title="Keranjang"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <MainContent />
            </ScrollView>
            {/* button checkout */}
            <View style={[GS.py4, GS.container]}>
                <TouchableOpacity
                    onPress={() => { checkout() }}
                    style={[Style.buttonCheckout, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                    <Text style={[GS.whiteColor, GS.fs3]}>Checkout</Text>
                    <ArrowIcon />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        borderRadius: 1000
    }
})