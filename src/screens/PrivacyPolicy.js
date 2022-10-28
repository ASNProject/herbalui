// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import CardArtikel from "./component/Card-Artikel";
import TopBar from "./component/TopBar1";
// icons
import BackIcon from "../../assets/icons/back_button.svg"
const example_product_1 = require("../../assets/images/olivia_turseena.png")
const example_product_2 = require("../../assets/images/afia_kids.png")
import FavoriteYellowIcon from "../../assets/icons/favorite_yellow.svg"
import artikel_1 from "../../assets/images/artikel_1.png";
import artikel_2 from "../../assets/images/artikel_2.png";
import artikel_3 from "../../assets/images/artikel_3.png";
// content  
export default function PrivacyPolicy({ navigation }) {
    // function 
    const backClick = function () {
        navigation.navigate("Profile");
    }
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title="Kebijakan privasi"
                backButton={true}
                backClick={backClick}
                nosearch={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                {/* content */}
                <View style={[GS.container, GS.mt4]}>
                    <Text style={[GS.fwLight, GS.fs5]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet eros eget ipsum tempus dictum. Aliquam quis rhoncus orci, at bibendum elit. In eget odio luctus purus tincidunt pulvinar. Curabitur id tortor at lorem sodales fringilla. Donec augue sem, rutrum in urna quis, consequat porttitor tellus. Nulla ac condimentum lorem. Sed ultricies feugiat ex. Cras mollis justo quis ante vulputate, eu tristique enim commodo. Sed pretium vitae augue eu pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam id diam lectus. Sed tempor augue augue, sed tristique neque porta ac.

                        Suspendisse posuere gravida nisi, at condimentum arcu dictum venenatis. Nam rhoncus metus at turpis tempus dapibus. Aliquam suscipit placerat diam, vel posuere elit posuere quis. Proin id sem ut odio lobortis suscipit et eu dui. Vivamus at eros elementum, tristique felis et, commodo velit. Sed quis nunc vel dolor maximus condimentum. Etiam porta faucibus scelerisque. Sed facilisis velit a ex convallis, quis placerat lorem ullamcorper. Proin elementum eros erat, a commodo lorem varius vel. Nulla sit amet cursus risus. Praesent accumsan et mi vitae pretium.

                        Praesent aliquam nibh urna. Morbi id erat pharetra, eleifend ex nec, pretium sapien. Vestibulum vestibulum cursus neque vitae vulputate. Nullam est purus, facilisis ac tincidunt at, laoreet vitae nisl. Aliquam erat volutpat. Maecenas dictum odio ligula, ac cursus lorem ultricies et. Phasellus quis feugiat augue. Donec pulvinar laoreet purus in dictum. Nunc eget fermentum lorem, vel ultricies est. Sed feugiat elementum mattis.
                    </Text>
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