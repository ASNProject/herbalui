import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Search from "../../../assets/icons/ph_magnifying-glass-bold.svg"
import GS from "../style/GlobalStyle";
import Times from "../../../assets/icons/la_times.svg";
import BackIcon from "../../../assets/icons/back_button.svg"
import FavoriteIcon from "../../../assets/icons/favorite.svg"
import FavoriteIconActive from "../../../assets/icons/favoriteactive.svg"
import CartIconBlack from "../../../assets/icons/cart_black.svg"

// content
export default function TopBar(props) {
    const openCart = function () {
        props.navigation.navigate("Cart");
    }
    return (
        <View>
            {
                !props.openSearch
                    ? (
                        <View style={[GS.TopBar]}>
                            <View style={[GS.container, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                                <View style={[GS.flexRow, GS.alignItemsCenter]}>
                                    {
                                        props.backButton ?
                                            (<TouchableOpacity onPress={props.backClick} style={[GS.mr2]}>
                                                <BackIcon />
                                            </TouchableOpacity>)
                                            : ""
                                    }
                                    <Text style={[GS.fwMedium, GS.fs4]}>{props.title}</Text>
                                </View>
                                {
                                    !props.nosearch ? (
                                        <TouchableOpacity onPress={props.onSearchClick}>
                                            <Search />
                                        </TouchableOpacity>
                                    )
                                        : ""
                                }
                                {
                                    props.showCart || props.showFavorite
                                        ?
                                        (
                                            <View style={[GS.flexRow, GS.alignItemsCenter]}>
                                                {
                                                    props.showCart
                                                        ?
                                                        (
                                                            <TouchableOpacity onPress={openCart} style={[GS.mr4]}>
                                                                <CartIconBlack height="25" />
                                                                {/* jumlah item dalam cart */}
                                                                {
                                                                    props.cartAmount > 0 ?
                                                                        (
                                                                            <View style={[Style.cartAmount]}>
                                                                                <Text style={[GS.whiteColor]}>
                                                                                    {props.cartAmount}
                                                                                </Text>
                                                                            </View>
                                                                        ) : ""
                                                                }
                                                            </TouchableOpacity>
                                                        )
                                                        :
                                                        ("")
                                                }
                                                {
                                                    props.showFavorite
                                                        ?
                                                        props.favoriteStatus
                                                            ?
                                                            (
                                                                <TouchableOpacity onPress={props.toggleFavorite}>
                                                                    <FavoriteIconActive />
                                                                </TouchableOpacity>
                                                            )
                                                            :
                                                            (
                                                                <TouchableOpacity onPress={props.toggleFavorite}>
                                                                    <FavoriteIcon />
                                                                </TouchableOpacity>
                                                            )
                                                        :
                                                        ("")
                                                }
                                            </View>
                                        )
                                        : ""
                                }
                            </View>
                        </View>
                    )
                    :
                    (
                        <View style={[GS.container, Style.InputSearch]}>
                            <View style={[GS.flexRow, GS.alignItemsCenter]}>
                                <Search width="10%" height="25" />
                                <TextInput
                                    selectionColor={"#00A6A6"}
                                    style={[GS.pl2, Style.textInput]} placeholder="Cari kata kunci"
                                    returnKeyType="go"
                                    value={props.value}
                                    onChangeText={props.setValue}
                                    onSubmitEditing={props.onSubmit}
                                />
                                <TouchableOpacity onPress={props.onTimesClick} width="10%" height="25">
                                    <Times height="25" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
            }
        </View>
    );
}
//style
const Style = StyleSheet.create({
    // search
    InputSearch: {
        paddingVertical: 15,
        borderBottomColor: "#F3F3F3",
        borderBottomWidth: 1,
        height: 60
    },
    textInput: {
        width: "80%"
    },
    cartAmount: {
        position: "absolute",
        right: -10,
        top: -5,
        zIndex: 2,
        backgroundColor: "#00A6A6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        borderRadius: 100,
        width: 20,
        height: 20
    },
})

