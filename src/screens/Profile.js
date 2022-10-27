// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
// images
import BackIcon from "../../assets/icons/back_button.svg"
import ProfileImage from "../../assets/images/profile.png"
import PenIcon from "../../assets/icons/ep_edit-pen.svg"
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
                        <Text style={[GS.fwMedium, GS.fs4]}>My Profile</Text>
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
            {/* profile */}
            <View style={[GS.mt4, GS.flexColumn, GS.alignItemsCenter, GS.mb5]}>
                <Image source={ProfileImage} style={[Style.profileImage]} />
                <Text style={[GS.mt4, GS.fs3]}>Muhammad Alendra</Text>
                <Text style={[GS.fwLight, GS.fs5]}>alendra099@gmail.com</Text>
                <TouchableOpacity onPress={props.clickEdit} style={[GS.flexRow, GS.mt3, GS.btnRoundedPrimary, Style.buttonUpdate]}>
                    <PenIcon />
                    <Text style={[GS.primaryColor, GS.fs5]}>Update</Text>
                </TouchableOpacity>
            </View>
            {/* Menus */}
            <TouchableOpacity style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
                <Text>Keranjang</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.clickFavorite} style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
                <Text>My Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
                <Text>Privacy policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[GS.mb3, Style.buttonBorderless, GS.flexRow, GS.justifyContentCenter]}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
// content  
export default function Profile({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("HomeMain");
    }
    const clickEdit = function () {
        navigation.navigate("ProfileEdit");
    }
    const clickFavorite = function () {
        navigation.navigate("Favorite");
    }
    // 
    return (
        <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                {/* top bar */}
                <TopBar backClick={backPage} />
                {/* content */}
                <MainContent clickFavorite={clickFavorite} clickEdit={clickEdit} />
            </SafeAreaView>
        </ScrollView>
    );
}
// specific style
const Style = StyleSheet.create({
    profileImage: {
        width: 75,
        height: 75
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
    }
})