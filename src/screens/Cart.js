// import
import { API_URL } from "@env"
import { RefreshControl, View, Alert, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Touchable } from "react-native";
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
import { useState, useEffect, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { NUMBER_COMAS, IMAGE_LOC } from "./script/GlobalScript";
// images
import MinusIcon from "../../assets/icons/minus.svg"
import PlusIcon from "../../assets/icons/plus.svg"
import TrashIcon from "../../assets/icons/ph_trash.svg"
import ArrowIcon from "../../assets/icons/arrow_right_white.svg"
// konten utama
const MainContent = function (props) {
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
            {/* card */}
            {
                props.cart.items.map((item) => {
                    let [amount, setAmount] = useState(item.amount);
                    const tambah = function () {
                        updateCart(item.product.id, amount + 1, item.id)
                        setAmount(amount + 1);
                    }
                    const kurang = function () {
                        updateCart(item.product.id, amount - 1, item.id)
                        setAmount(amount - 1);
                    }
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
                                <Image source={{ url: IMAGE_LOC(item.product.images[0].path) }} style={[Style.productImage, GS.mr3]} />
                                <View>
                                    <Text style={[GS.fs5, GS.fwRegular, { width: "90%" }]}>
                                        {item.product.name}
                                    </Text>
                                    <Text style={[GS.fs5, GS.primaryColor, GS.mt1]}>Rp {NUMBER_COMAS(item.product.price)}</Text>
                                    <View style={[GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter, {
                                        width: "68%"
                                    }]}>
                                        <View style={[GS.flexRow, GS.alignItemsCenter, GS.mt1]}>
                                            <TextInput
                                                editable={false}
                                                value={amount.toString()}
                                                style={[Style.inputAmount, GS.fs6, GS.textCenter]} keyboardType="number-pad" cursorColor="#00A6A6" selectionColor="#00A6A6" />
                                            {/* edit kurangin jumlah produk */}
                                            {
                                                amount <= 1
                                                    ? (
                                                        <TouchableOpacity style={[GS.ml2, Style.btnEditAmount, { opacity: 0.5 }]}>
                                                            <MinusIcon width="20" />
                                                        </TouchableOpacity>
                                                    )
                                                    : (
                                                        <TouchableOpacity
                                                            onPress={kurang}
                                                            style={[GS.ml2, Style.btnEditAmount, { opacity: 1 }]}>
                                                            <MinusIcon width="20" />
                                                        </TouchableOpacity>
                                                    )
                                            }
                                            {/* edit tambah jumlah produk */}
                                            {
                                                amount >= 999
                                                    ? (
                                                        <TouchableOpacity style={[GS.ml2, Style.btnEditAmount, { opacity: 0.5 }]}>
                                                            <PlusIcon width="20" />
                                                        </TouchableOpacity>
                                                    )
                                                    : (
                                                        <TouchableOpacity
                                                            onPress={tambah}
                                                            style={[GS.ml2, Style.btnEditAmount]}>
                                                            <PlusIcon width="20" />
                                                        </TouchableOpacity>
                                                    )
                                            }
                                        </View>
                                        <TouchableOpacity onPress={hapus}>
                                            <TrashIcon width={20} height={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
                )
            }
        </View >
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
// loading content
const LoadContent = function () {
    return (
        <View style={[GS.container, GS.mt5]}>
            <Text style={[GS.textCenter, GS.fs3]}>Harap tunggu</Text>
            <Text style={[GS.textCenter]}>Sedanng memuat konten</Text>
        </View>
    );
}
// content  
export default function Cart({ navigation }) {
    // variable
    const [userData, setUserData] = useState({});
    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState({
        items: []
    });
    const [refreshing, setRefreshing] = useState(false);
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
        const focus = navigation.addListener('focus', () => {
            // Call any action
            setCartEmpty();
            getData();
        });
        // get user data
        getData();
        //
        return focus;
    }, [])
    // function 
    const backClick = function () {
        navigation.navigate("HomeMain");
    }
    const checkout = function () {
        navigation.navigate("Checkout");
    }
    // 
    const setCartEmpty = function () {
        setLoading(true)
        setCart({
            items: []
        });
    }
    //
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            // alert('refreshing done');
            setCartEmpty();
            getData();
            setRefreshing(false);
        }, 1000);
    }, []);
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title="Keranjang"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {
                    cart.items.length > 0
                        ?
                        (
                            <MainContent setCartEmpty={setCartEmpty} getData={getData} userToken={userToken} cart={cart} />
                        ) :
                        loading ?
                            <LoadContent />
                            :
                            (
                                <EmptyContent />
                            )
                }
            </ScrollView>
            {/* button checkout */}
            {
                cart.items.length > 0
                    ?
                    (
                        <View style={[GS.py2, GS.container]}>
                            {/* total */}
                            <View style={[GS.flexRow, GS.justifySpaceBetween, { width: "100%" }, GS.mb2]}>
                                <Text style={[GS.fs3, GS.secondaryColor]}>Total</Text>
                                <View style={[GS.flexRow, GS.alignItemsEnd]}>
                                    <Text style={[GS.fs5, GS.fwLight, GS.mr1]}>Rp</Text>
                                    <Text style={[GS.fs3]}>{NUMBER_COMAS(cart.total_price)}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => { checkout() }}
                                style={[Style.buttonCheckout, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                                <Text style={[GS.whiteColor, GS.fs3]}>Checkout sekarang</Text>
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
        paddingTop: 20,
        paddingBottom: 20,
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
    },
    borderTopCheckout: {
        borderColor: "#D9D9D9",
        borderTopWidth: 1
    }
})