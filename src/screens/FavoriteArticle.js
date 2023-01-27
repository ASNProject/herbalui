// import
import { API_URL } from "@env"
import { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import CardArtikel from "./component/Card-Artikel";
import TopBar from "./component/TopBar1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { DIPUBLIKASIKAN } from "./script/GlobalScript";
// icons
import artikel_1 from "../../assets/images/artikel_1.png";
import artikel_2 from "../../assets/images/artikel_2.png";
import artikel_3 from "../../assets/images/artikel_3.png";
// content  
export default function FavoriteArtikel({ navigation }) {
    // variable
    const [articles, setArticles] = useState([]);
    const [userToken, setUserToken] = useState(null);
    // function 
    const backClick = function () {
        navigation.navigate("Favorite");
    }
    const CardClick = function () {
        navigation.navigate("ArtikelDetail");
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
                    let userFavorite = response.data.data.articles;
                    setArticles(userFavorite)
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
    // delete favorite
    const deleteFavorite = (id) => {
        const form = new FormData();
        form.append("article_id", id);
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
    // use effect
    useEffect(() => {
        getData();
    }, [])
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title="Artikel disimpan"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <View style={[GS.container, GS.mt4]}>
                    {/* card */}
                    {
                        articles.map((item, index) => {
                            return (
                                <CardArtikel whenCardClick={CardClick} image={artikel_2}
                                    title={item.article.title}
                                    publishDate={DIPUBLIKASIKAN(item.created_at)}
                                    showFavorite={true}
                                    onFavoriteClick={() => { deleteFavorite(item.article.id) }}
                                />
                            )
                        })
                    }
                    {/* data is empty */}
                    {
                        articles.length == 0 ?
                            (
                                <Text style={[GS.textCenter, GS.fs5, GS.mt4]}>Data tidak tersedia</Text>
                            )
                            :
                            ""
                    }
                </View>
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