// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, Touchable } from "react-native";
import { useEffect } from 'react';
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
import AsyncStorage from '@react-native-async-storage/async-storage';
// images
import ProfileImage from "../../assets/images/profile.png"
import PenIcon from "../../assets/icons/ep_edit-pen.svg"
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
            <TouchableOpacity
                onPress={props.clickCart}
                style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
                <Text>Keranjang</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.clickFavorite} style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
                <Text>My Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={props.clickPrivacy}
                style={[GS.mb3, Style.buttonBorder, GS.flexRow, GS.justifyContentCenter]}>
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
    const backClick = function () {
        navigation.navigate("HomeMain");
    }
    const clickEdit = function () {
        navigation.navigate("ProfileEdit");
    }
    const clickFavorite = function () {
        navigation.navigate("Favorite");
    }
    const clickPrivacy = function () {
        navigation.navigate("PrivacyPolicy");
    }
    const clickCart = function () {
        navigation.navigate("Cart");
    }
    // on page load
    useEffect(() => {
        // check if user auth token is valid
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@userAuth')
                // validasi data user
                if (value !== null) {
                    // value previously stored
                    // validate user data
                    let userData = JSON.parse(value);
                    // setup data
                    const options = {
                        method: 'GET',
                        url: 'https://staging.herbalinfo.site/api/auth/me',
                        headers: {
                            Auth: userData.token
                        },
                    };
                    // request
                    axios.request(options).then(function (response) {
                        // console.log(response.data);
                        // handle as login user
                    }).catch(function (error) {
                        AsyncStorage.removeItem('@userAuth')
                        // navigation.navigate("Login");
                        // handle as guest
                        navigation.replace("PleaseLogin")
                    });
                }
                // handle as guest
                navigation.replace("PleaseLogin")
            } catch (e) {
                // error reading value
                alert("error");
            }
        }
        // get user auth localstorage
        getData();
    }, [])
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title="My Profile"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <MainContent
                    clickEdit={clickEdit}
                    clickFavorite={clickFavorite}
                    clickPrivacy={clickPrivacy}
                    clickCart={clickCart}
                />
            </ScrollView>
        </SafeAreaView>
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