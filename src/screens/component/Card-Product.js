import { TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import GS from "../style/GlobalStyle"
//
export default function CardProduct(props) {
    return (
        <TouchableOpacity onPress={props.whenCardClick} style={[Style.cardProduct, GS.flexColumn, GS.alignItemsCenter]} >
            <Image style={[Style.imageProduct]} source={props.image} />
            <Text style={[GS.fs5]}>{props.title}</Text>
            <Text style={[GS.fs5, GS.primaryColor]}>{props.price}</Text>
        </TouchableOpacity >
    )
}
// style
const Style = StyleSheet.create({
    // card
    cardProduct: {
        borderWidth: 1,
        borderColor: "#F3F3F3",
        width: "46%",
        padding: 20,
        margin: "2%",
    },
    imageProduct: {
        height: 100,
        width: 90,
        resizeMode: "contain",
    }
});