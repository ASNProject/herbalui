// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import TopBar from "./component/TopBar1";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env"
import { IMAGE_LOC, NUMBER_COMAS, PRODUCT_TITLE } from "./script/GlobalScript";
import { useState, useEffect } from "react";
// icons
import FavoriteYellowIcon from "../../assets/icons/favorite_yellow.svg"
//content
const Content = function (props) {
    return (
        <View style={[GS.container, GS.mt4]}>
            <View style={[GS.flexRow, GS.justifySpaceBetween]}>
                {/* card */}
                {
                    props.products.map((item) => {
                        return (
                            <TouchableOpacity onPress={() => { props.whenCardClick(item.product) }} style={[Style.cardProduct, GS.flexColumn, GS.alignItemsCenter]}>
                                <Image style={[Style.imageProduct]} source={{ url: IMAGE_LOC(item.product.images[0].path) }} />
                                <Text style={[GS.fs5, GS.textCenter]}>{PRODUCT_TITLE(item.product.name)}</Text>
                                <Text style={[GS.fs5, GS.primaryColor]}>Rp {NUMBER_COMAS(item.product.price)}</Text>
                                <TouchableOpacity onPress={() => { props.deleteFavorite(item.product.id) }} style={[Style.favoriteIcon]}>
                                    <FavoriteYellowIcon width="20" height="20" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )

                    })
                }
            </View>
        </View>
    )
}

// content  
export default function FavoriteProduct({ navigation }) {
    // variable
    const [products, setProducts] = useState([]);
    const [userToken, setUserToken] = useState(null);
    // function 
    const backClick = function () {
        navigation.navigate("Favorite");
    }
    // function
    const CardClick = async function (item) {
        await AsyncStorage.setItem('@requestBack', "FavoriteProduct")
        navigation.navigate("ProductDetail", item);
    }
    // delee favorite
    const deleteFavorite = (id) => {

        const form = new FormData();
        form.append("product_id", id);
        const options = {
            method: 'POST',
            url: API_URL + '/auth/toggle-favorite',
            headers: {
                Auth: userToken
            },
            data: form
        };

        axios.request(options).then(function (response) {
            getData();
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    // get data
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
                // get users favorite data
                // request user favorite
                const options = {
                    method: 'GET',
                    url: API_URL + '/auth/favorite',
                    headers: {
                        Auth: userData.token
                    },
                };

                axios.request(options).then(function (response) {
                    // alert("halo")
                    let userFavorite = response.data.data.products;
                    setProducts(userFavorite)
                }).catch(function (error) {
                    console.error(error);
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
    // use effect
    useEffect(() => {
        getData();
    }, [])
    // 
    return (
        <SafeAreaView style={[GS.h100, GS.bgWhite]}>
            {/* top bar */}
            <TopBar title="Produk disimpan"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <Content deleteFavorite={deleteFavorite} products={products} whenCardClick={CardClick} />
                {/* data is empty */}
                {
                    products.length == 0 ?
                        (
                            <Text style={[GS.textCenter, GS.fs5, GS.mt4]}>Data tidak tersedia</Text>
                        )
                        :
                        ""
                }
            </ScrollView>
        </SafeAreaView>
    );
}
// specific style
const Style = StyleSheet.create({
    //  favorite button
    buttonFavorite: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 5,
        shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.06, shadowRadius: 20
    },
    // card
    cardHerbalEdu: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 3,
        padding: 25,
    },
    textCard: {
        width: "70%"
    },
    cardProduct: {
        borderWidth: 1,
        borderColor: "#F3F3F3",
        width: "48%",
        padding: 20,
    },
    imageProduct: {
        height: 100,
        width: 90,
        resizeMode: "contain",
    },
    favoriteIcon: {
        position: "absolute",
        right: 10,
        top: 10
    }
})