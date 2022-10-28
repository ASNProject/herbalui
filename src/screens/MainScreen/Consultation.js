import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GS from "../style/GlobalStyle";
import TopBar from "../component/TopBar1";
// images
const profile_robot = require("../../../assets/images/konsultasi_robot.png");
const profile_1 = require("../../../assets/images/konsultasi_1.png");
const profile_2 = require("../../../assets/images/konsultasi_2.png");
import IconOffline from "../../../assets/icons/offline.svg";
import IconOnline from "../../../assets/icons/online.svg";
// component consultants
const Consultant = function (props) {
    return (
        <View style={[GS.container, GS.mt4]}>
            {/* card */}
            <TouchableOpacity onPress={props.clickOpenChat}>
                <View style={[Style.Card, GS.flexRow, GS.mb4]}>
                    <View>
                        <Image style={[Style.cardImage]} source={profile_robot} />
                    </View>
                    <View style={[GS.ml3]}>
                        {/* online */}
                        <View style={[GS.flexRow, GS.alignItemsCenter]}>
                            <IconOnline />
                            <Text style={[GS.ml1, GS.fs6, GS.fwLight]}>online</Text>
                        </View>
                        <Text style={[GS.fs4, GS.fwLight]}>Robo</Text>
                        <Text style={[GS.fwLight, GS.fs5]}>klik untuk mulai  chat</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* card */}
            <TouchableOpacity onPress={props.clickOpenChat}>
                <View style={[Style.Card, GS.flexRow, GS.mb4]}>
                    <View>
                        <Image style={[Style.cardImage]} source={profile_1} />
                    </View>
                    <View style={[GS.ml3]}>
                        {/* online */}
                        <View style={[GS.flexRow, GS.alignItemsCenter]}>
                            <IconOnline />
                            <Text style={[GS.ml1, GS.fs6, GS.fwLight]}>online</Text>
                        </View>
                        <Text style={[GS.fs4, GS.fwLight]}>Dr Nafa</Text>
                        <Text style={[GS.fwLight, GS.fs5]}>klik untuk mulai  chat</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* card */}
            <TouchableOpacity onPress={props.clickOpenChat}>
                <View style={[Style.Card, GS.flexRow, GS.mb4]}>
                    <View>
                        <Image style={[Style.cardImage]} source={profile_2} />
                    </View>
                    <View style={[GS.ml3]}>
                        {/* online */}
                        <View style={[GS.flexRow, GS.alignItemsCenter]}>
                            <IconOffline />
                            <Text style={[GS.ml1, GS.fs6, GS.fwLight]}>offline</Text>
                        </View>
                        <Text style={[GS.fs4, GS.fwLight]}>Dr Yaseefa</Text>
                        <View style={[GS.flexRow, GS.justifySpaceBetween, { width: "84%" }]}>
                            <Text style={[GS.fwRegular, GS.fs5]}>Silahkan kunjungi rs terdekatya</Text>
                            <View style={[Style.BGnumberIncomingMessage, GS.flexRow, GS.alignItemsCenter, GS.justifyContentCenter]}>
                                <Text style={[Style.numberIncomingMessage]}>1</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default function Consultation({ navigation }) {
    // function
    const openChat = function () {
        navigation.navigate("ConsultationDetail")
    }
    return (
        <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                {/* topbar */}
                <TopBar title="Konsultasi" nosearch={true} />
                {/* consultants */}
                <Consultant clickOpenChat={openChat} />
            </SafeAreaView>
        </ScrollView>
    )
}
// style
const Style = StyleSheet.create({
    Card: {
        borderColor: "#F3F3F3",
        borderWidth: 1,
        padding: 20
    },
    cardImage: {
        width: 60,
        height: 60
    },
    numberIncomingMessage: {
        color: "#fff",
        borderRadius: 1000,
    },
    BGnumberIncomingMessage: {
        color: "#fff",
        backgroundColor: "#00A6A6",
        borderRadius: 1000,
        width: 20,
        height: 20
    },
})