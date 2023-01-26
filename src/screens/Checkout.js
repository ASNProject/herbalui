// import
import { API_URL } from "@env"
import axios from 'axios';
import { RefreshControl, Alert, View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import GS from "./style/GlobalStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopBar from "./component/TopBar1";
import { useEffect, useState } from "react";
import { IMAGE_LOC, NUMBER_COMAS, OPEN_LINK } from "./script/GlobalScript";
// images
import TrashIcon from "../../assets/icons/ph_trash.svg"
//
const MainContent = function (props) {
    // update cart items
    const updateCart = function (product_id, amount, item_id) {
        // prepare for request
        const form = new FormData();
        form.append("product_id", product_id);
        form.append("amount", amount);
        form.append("item_id", item_id);
        const options = {
            method: 'POST',
            url: API_URL + '/auth/cart/update',
            headers: {
                Auth: props.userToken
            },
            data: form
        };
        // axios request
        axios.request(options).then(function (response) {
            // console.log(response.data);
            props.getData();
        }).catch(function (error) {
            Alert("Gagal memperbaruhi", "terjadi kesalahan saat memperbaruhi data")
            // console.error(error);
        });
    }
    return (
        <View style={[GS.container, GS.mt4, GS.flexColumn, GS.alignItemsCenter]}>
            <View style={[{ width: "100%" }, GS.my3]}>
                <Text style={[GS.fs3, GS.secondaryColor]}>Barang</Text>
            </View>
            {/* card */}
            {
                props.cart.items.map((item) => {
                    // hapus item
                    const hapus = function () {
                        Alert.alert(
                            "Konfirmasi",
                            "Hapus item ini?",
                            [
                                // The "Yes" button
                                {
                                    text: "Ya",
                                    onPress: () => {
                                        props.setCartEmpty();
                                        updateCart(item.product.id, 0, item.id);
                                    }
                                },
                                // The "No" button
                                // Does nothing but dismiss the dialog when tapped
                                {
                                    text: "Batal",
                                },
                            ]
                        );
                    }
                    return (
                        <View style={[Style.cardProduct, GS.mb4]}>
                            <View style={[GS.flexRow, GS.alignItemsCenter]}>
                                <Image source={{ url: IMAGE_LOC(item.product.images[0].path) }} style={[Style.productImage]} />
                                <View style={[GS.ml3, { width: "70%" }]}>
                                    <Text style={[GS.fs5, GS.fwRegular, { width: "100%" }]}>{item.product.name}</Text>
                                    <Text style={[GS.fs5, GS.primaryColor, GS.mt1, GS.fs5]}>Rp {NUMBER_COMAS(item.product.price)}</Text>
                                    <View style={[GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween, GS.mt1]}>
                                        <Text style={[GS.fs6]}>{NUMBER_COMAS(item.amount)} item</Text>
                                        <TouchableOpacity onPress={hapus}>
                                            <TrashIcon width={20} height={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
            {/* form data pembeli */}
            <View style={[GS.w100, GS.my3]}>
                <Text style={[GS.fs3, GS.secondaryColor]}>Data pembeli</Text>
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Nama</Text>
                <TextInput style={[Style.inputForm, Style.inputDisable]}
                    editable={false}
                    value={props.userData.name} placeholder="Muhammad Alendra" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Email</Text>
                <TextInput style={[Style.inputForm, Style.inputDisable]}
                    editable={false}
                    value={props.userData.email} placeholder="alendra099@gmail.com" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>No hp</Text>
                <TextInput style={[Style.inputForm]} onChangeText={props.setUserPhone} keyboardType={"numeric"}
                    textContentType={"telephoneNumber"} value={props.userPhone} placeholder="No hp" />
            </View>
            <View style={[GS.w100, GS.mb4]}>
                <Text style={[GS.mb1, GS.fs5]}>Alamat lengkap</Text>
                <TextInput
                    value={props.userAddress} onChangeText={props.setUserAddress}
                    style={[Style.inputForm, { height: 50 }]}
                    multiline={true} placeholder="Alamat lengkap" />
            </View>
            {/* button konfirmasi */}
            <View style={[GS.py4, GS.container, { width: "100%", marginBottom: 50 }]}>
                <TouchableOpacity onPress={props.confirm} style={[Style.buttonCheckout, GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter]}>
                    <Text style={[GS.whiteColor, GS.fs3]}>Pesan sekarang</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// content  
export default function Checkout({ navigation }) {
    const [userData, setUserData] = useState({});
    const [userPhone, setUserPhone] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState({
        items: []
    });
    // get user data & cart data
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
                    setUserPhone(newUserData.phone)
                    setUserAddress(newUserData.address)
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
                    } else {
                        return navigation.navigate("Cart")
                    }
                }).catch(function (error) {
                    Alert.alert("Terjadi kesalahan", "tidak dapat mengambil data keranjang");
                    console.error(error.response);
                })
                    .then(() => {
                        setLoading(false);
                    })
            } else {
                // handle as guest
                navigation.replace("PleaseLogin")
            }
        } catch (e) {
            // error reading value
            alert("Terjadi kesalahan");
        }
    }
    useEffect(() => {
        // get user data
        getData();
    }, [])
    // function 
    const backClick = function () {
        navigation.navigate("Cart");
    }
    //
    const setCartEmpty = function () {
        // setCart({
        //     items: []
        // });
    }
    //  confirm pesanan
    const confirm = function () {
        if (!userPhone || !userAddress) return Alert.alert("Data belum lengkap", "Silahkan lengkapi data anda");
        Alert.alert(
            "Konfirmasi",
            "Sudah yakin dengan data Anda?",
            [
                // The "Yes" button
                {
                    text: "Lanjutkan",
                    onPress: () => {
                        //confirm
                        const form = new FormData();
                        form.append("no_hp", userPhone);
                        form.append("address", userAddress);

                        const options = {
                            method: 'POST',
                            url: API_URL + '/auth/cart/confirm',
                            headers: {
                                Auth: userToken
                            },
                            data: form
                        };

                        axios.request(options).then(function (response) {
                            Alert.alert("Terimakasih atas pesanan Anda", "Anda akan dialihkan ke customer service kami")
                            navigation.navigate("HomeMain");
                            OPEN_LINK("https://wa.me/62812591327336?text=saya ingin menkonfirmasi pesanan saya")
                            // console.log(response.data);
                        }).catch(function (error) {
                            Alert.alert("Terjadi kesalahan", "tidak dapat menkonfirmasi pesanan anda")
                            // console.error(error.response.data.data);
                        });
                        //
                    }
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "Batal",
                },
            ]
        );
    }
    //
    return (
        <SafeAreaView style={[GS.bgWhite]}>
            {/* top bar */}
            <TopBar title="Checkout"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <MainContent
                    userPhone={userPhone} userAddress={userAddress}
                    setUserPhone={setUserPhone} setUserAddress={setUserAddress}
                    confirm={confirm} userToken={userToken} setCartEmpty={setCartEmpty} getData={getData} userData={userData} cart={cart} />
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
    },
    inputDisable: {
        color: "#A0A0A0"
    }
})