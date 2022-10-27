// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
// images
import BackIcon from "../../assets/icons/back_button.svg"
import ProfileImage from "../../assets/images/profile.png"
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
                        <Text style={[GS.fwMedium, GS.fs4]}>Edit profile</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
//
const MainContent = function (props) {
    return (
        <View style={[GS.container, GS.mt4, GS.flexColumn, GS.alignItemsCenter]}>
            {/* profile picture */}
            <Image source={ProfileImage} />
            <TouchableOpacity style={[GS.flexRow, GS.mt3, GS.btnRoundedPrimary, Style.buttonUpdate]}>
                <Text style={[GS.primaryColor, GS.fs5]}>Ganti gambar</Text>
            </TouchableOpacity>
            {/* form */}
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
                <TouchableOpacity
                    onPress={props.updateClick}
                    style={[Style.buttonCheckout, GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter]}>
                    <Text style={[GS.whiteColor, GS.fs3]}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.gantiPasswordClick}
                    style={[GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter, GS.mt4]}>
                    <Text style={[GS.primaryColor, GS.fs4]}>Ganti password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// content  
export default function ProfileEdit({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Profile");
    }
    const updateClick = function () {
        alert("updating")
    }
    const gantiPasswordClick = function () {
        navigation.navigate("ChangePassword");
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <MainContent updateClick={updateClick} gantiPasswordClick={gantiPasswordClick} />
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