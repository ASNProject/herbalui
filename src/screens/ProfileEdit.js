// import
import { API_URL } from "@env"
import { useEffect, useState } from "react";
import { View, Text, Alert, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// images
import BackIcon from "../../assets/icons/back_button.svg"
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
// component
const MainContent = function (props) {
    // content
    return (
        <View style={[GS.container, GS.mt4, GS.flexColumn, GS.alignItemsCenter]}>
            {/* profile picture */}
            {/* <Image source={ProfileImage} /> */}
            {/* <TouchableOpacity style={[GS.flexRow, GS.mt3, GS.btnRoundedPrimary, Style.buttonUpdate]}>
                <Text style={[GS.primaryColor, GS.fs5]}>Ganti gambar</Text>
            </TouchableOpacity> */}
            {/* form */}
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Nama</Text>
                <TextInput
                    onChangeText={(props.setName)}
                    style={[Style.inputForm]} defaultValue={props.name} placeholder="Nama saya" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>No hp</Text>
                <TextInput
                    onChangeText={(props.setPhone)}
                    style={[Style.inputForm]} defaultValue={props.phone} placeholder="No hp" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Alamat lengkap</Text>
                <TextInput
                    onChangeText={(props.setAddress)}
                    style={[Style.inputForm, { height: 50 }]}
                    multiline={true}
                    defaultValue={props.address}
                    placeholder="Alamat lengkap" />
            </View>
            {/* button konfirmasi */}
            <View style={[GS.py4, GS.container, { width: "100%" }]}>
                <TouchableOpacity
                    onPress={props.updateClick}
                    style={[Style.buttonCheckout, GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter]}>
                    <Text style={[GS.whiteColor, GS.fs3]}>Update profil</Text>
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
    // variable
    const [userData, setUserData] = useState({});
    const [userName, setUserName] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [userAddress, setUserAddress] = useState(null);
    // use effect
    useEffect(() => {
        //
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@userAuth')
                // validasi data user
                if (value !== null) {
                    // value previously stored
                    // validate user data
                    let data = JSON.parse(value);
                    setUserData(data);
                    setUserName(data.name)
                    setUserPhone(data.phone)
                    setUserAddress(data.address)
                } else {
                    // handle as guest
                    navigation.replace("PleaseLogin")
                }
            } catch (e) {
                // error reading value
                alert("Terjadi kesalahan");
            }
        }
        // unsubscribe focus
        const unsubscribe = navigation.addListener('focus', () => {
            // Call any action
            getData();
        });
        // get user auth localstorage
        getData();
        return unsubscribe;
    }, navigation)
    // function 
    const backPage = function () {
        navigation.navigate("Profile");
    }
    const updateClick = function () {
        const form = new FormData();
        form.append("name", userName);
        form.append("phone", userPhone);
        form.append("address", userAddress);

        const options = {
            method: 'POST',
            url: API_URL + '/auth/me/update',
            headers: {
                Auth: userData.token
            },
            data: form
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            Alert.alert("Berhasil", "Data berhasil diperbaruhi");
            navigation.navigate("Profile")
        }).catch(function (error) {
            console.error(error);
            Alert.alert("Terjadi kesalahan", "Gagal memperbaruhi data");
        });
    }
    const gantiPasswordClick = function () {
        navigation.navigate("ChangePassword");
    }
    const setName = (text) => {
        alert(text)
        let ud = userData;
        ud.name = text;
        setUserData(ud);
        // alert(userData.name)
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <MainContent
                        name={userName} phone={userPhone} address={userAddress}
                        setName={setUserName} setPhone={setUserPhone} setAddress={setUserAddress}
                        updateClick={updateClick} gantiPasswordClick={gantiPasswordClick} />
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