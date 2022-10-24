// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "../style/GlobalStyle";
// images
import BackIcon from "../../../assets/icons/back_button.svg"
const profile_1 = require("../../../assets/images/konsultasi_1.png");
import IconOnline from "../../../assets/icons/online.svg";

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
                        <Image source={profile_1} style={[Style.profileImage]} />
                        <View style={[GS.ml2]}>
                            <Text style={[GS.fwMedium, GS.fs4]}>Dr Yaseefa</Text>
                            {/* online */}
                            <View style={[GS.flexRow, GS.alignItemsCenter]}>
                                <IconOnline />
                                <Text style={[GS.ml1, GS.fs6, GS.fwLight]}>Online</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
//
const MainContent = function () {
    return (
        <View style={[GS.container, GS.mt4]}>
            {/* my chat */}
            <View style={[GS.flexRow, GS.justifyContentEnd]}>
                <View style={[Style.cardMyMessage]}>
                    <Text style={[GS.whiteColor]}>Halo dok selamat pagi!</Text>
                    <View style={[GS.flexRow, GS.justifyContentEnd]}>
                        <Text style={[GS.mt3, GS.whiteColor]}>13-10-2022 1:04 PM</Text>
                    </View>
                </View>
            </View>
            {/* incoming chat  */}
        </View>
    )
}
// content  
export default function ConsultationDetail({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Konsultasi");
    }
    // 
    return (
        <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                {/* top bar */}
                <TopBar backClick={backPage} />
                {/* content */}
                <MainContent />
                {/* read others */}
            </SafeAreaView>
        </ScrollView>
    );
}
// specific style
const Style = StyleSheet.create({
    profileImage: {
        width: 45,
        height: 45
    },
    cardMyMessage: {
        backgroundColor: "#00A6A6",
        width: "75s%",
        padding: 15,
        borderRadius: 10
    }
})