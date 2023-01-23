// import
import { API_URL } from "@env"
import { View, Alert, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// images
const example_product_1 = require("../../assets/images/olivia_turseena.png")
import MinusIcon from "../../assets/icons/minus.svg"
import PlusIcon from "../../assets/icons/plus.svg"
import ArrowIcon from "../../assets/icons/arrow_right_white.svg"
// konten utama
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
// empty content
const EmptyContent = function () {
    return (
        <View style={[GS.container, GS.mt5]}>
            <Text style={[GS.textCenter, GS.fs3]}>Keranjang kosong</Text>
            <Text style={[GS.textCenter]}>Silahkan tambahkan barang terlebih dahulu</Text>
        </View>
    );
}
// content  
export default function Cart({ navigation }) {
    // variable
    const [userData, setUserData] = useState({});
    const [userToken, setUserToken] = useState(null);
    const [cart, setCart] = useState([]);
    // variable
    const getCartData = () => {
    }
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
                    // set variable user token
                    setUserToken(userData.token);
                    // setup data
                    const options = {
                        method: 'GET',
                        url: API_URL + '/auth/me',
                        headers: {
                            Auth: userData.token
                        },
                    };
                    // request
                    axios.request(options).then(async function (response) {
                        // console.log(response.data);
                        // handle as login user
                        let newUserData = response.data.data;
                        newUserData.token = userData.token;
                        const jsonValue = JSON.stringify(newUserData)
                        await AsyncStorage.setItem('@userAuth', jsonValue)
                        setUserData(newUserData);
                        return true;
                    }).catch(function (error) {
                        AsyncStorage.removeItem('@userAuth')
                        // navigation.navigate("Login");
                        // handle as guest
                        return navigation.replace("PleaseLogin")
                    });

                    // get carts data
                    const form_cart = new FormData();
                    const options_cart = {
                        method: 'GET',
                        url: API_URL + '/auth/cart',
                        headers: {
                            Auth: userData.token
                        },
                        data: form_cart
                    };

                    axios.request(options_cart).then(function (response) {
                        // console.log(response.data);
                        if (response.data.data != null) {
                            setCart(response.data.data);
                        }
                    }).catch(function (error) {
                        Alert.alert("Terjadi kesalahan", "tidak dapat mengambil data keranjang");
                        console.error(error.response);
                    });
                } else {
                    // handle as guest
                    navigation.replace("PleaseLogin")
                }
            } catch (e) {
                // error reading value
                alert("Terjadi kesalahan");
            }
        }
        // get user data
        getData()
    }, [])
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
                {
                    cart.length > 0
                        ?
                        (
                            <MainContent />
                        ) :
                        (
                            <EmptyContent />
                        )
                }
            </ScrollView>
            {/* button checkout */}
            {
                cart.length > 0
                    ?
                    (
                        <View style={[GS.py4, GS.container]}>
                            <TouchableOpacity
                                onPress={() => { checkout() }}
                                style={[Style.buttonCheckout, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                                <Text style={[GS.whiteColor, GS.fs3]}>Checkout</Text>
                                <ArrowIcon />
                            </TouchableOpacity>
                        </View>
                    ) : ""
            }
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