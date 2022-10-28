import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"
import GS from "../style/GlobalStyle";
//
export default function CardArtikel(props) {
    return (
        <TouchableOpacity onPress={props.whenCardClick} style={[GS.mb2]}>
            <View style={[GS.flexRow, GS.alignItemsCenter, GS.justifySpaceBetween, Style.cardHerbalEdu]}>
                <View style={[Style.cardLeft]}>
                    <Text style={[GS.fs4]}>{props.title}</Text>
                    <Text style={[GS.fs5, GS.fwLight, GS.mt2]}>{props.publishDate}</Text>
                </View>
                <View style={[Style.cardRight]}>
                    <Image source={props.image} style={[Style.imageCard]} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
// style
const Style = StyleSheet.create({
    // header
    header: {
        width: "100%"
    },
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
    // card
    cardRight: {
        width: "30%"
    },
    cardLeft: {
        width: "70%"
    },
    imageCard: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "cover"
    }
});