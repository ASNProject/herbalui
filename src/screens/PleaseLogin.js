// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
//
const MainContent = function (props) {
    return (
        <View style={[GS.container, GS.flexColumn, GS.alignItemsCenter, GS.justifyContentCenter, GS.h100]}>
            {/* profile */}
            <View style={[GS.flexColumn, GS.alignItemsCenter, GS.mb5]}>
                <Text style={[GS.mt4, GS.fs3, GS.textCenter]}>Silahkan Masuk ke Akun untuk menikmati fitur lengkap</Text>
            </View>
            {/* Menus */}
            <TouchableOpacity
                onPress={props.clickLogin}
                style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter, GS.bgPrimary]}>
                <Text style={[GS.whiteColor]}>Masuk akun</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.clickDaftar} style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
                <Text>Daftar akun baru</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.clickBack} style={[GS.mb3, Style.buttonBorderless, GS.flexRow, GS.justifyContentCenter]}>
                <Text>Kembali</Text>
            </TouchableOpacity>
        </View>
    )
}
// content  
export default function PleaseLogin({ navigation }) {
    // function 
    const clickLogin = function () {
        AsyncStorage.removeItem('@skipLogin')
        navigation.navigate("Login");
    }
    const clickDaftar = function () {
        AsyncStorage.removeItem('@skipLogin')
        navigation.navigate("Daftar");
    }
    const clickBack = function () {
        navigation.navigate("MainNavigation");
    }
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100, GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <MainContent
                    clickLogin={clickLogin}
                    clickDaftar={clickDaftar}
                    clickBack={clickBack}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
// specific style
const Style = StyleSheet.create({
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100
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