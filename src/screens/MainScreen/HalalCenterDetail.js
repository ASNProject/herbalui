// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import GS from "../style/GlobalStyle";
import TopBar from "../component/TopBar1";
// images
import BackIcon from "../../../assets/icons/back_button.svg"
import FavoriteIcon from "../../../assets/icons/favorite.svg"
import FavoriteYellowIcon from "../../../assets/icons/favorite_yellow.svg"
//
const MainContent = function () {
    return (
        <View style={[GS.container, GS.mt4]}>
            <Text style={[GS.fs2, GS.fwMedium]}>Proses produksi yang terjamin kehalalan nya</Text>
            <Text style={[GS.fs6, GS.fwLight]}>Di publikasikan pada 3 oktober 2022</Text>
            <Text style={[GS.mt3, GS.fwLight]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet eros eget ipsum tempus dictum. Aliquam quis rhoncus orci, at bibendum elit. In eget odio luctus purus tincidunt pulvinar. Curabitur id tortor at lorem sodales fringilla. Donec augue sem, rutrum in urna quis, consequat porttitor tellus. Nulla ac condimentum lorem. Sed ultricies feugiat ex. Cras mollis justo quis ante vulputate, eu tristique enim commodo. Sed pretium vitae augue eu pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam id diam lectus. Sed tempor augue augue, sed tristique neque porta ac.
            </Text>
        </View>
    )
}
// content  
export default function HalalCenterDetail({ navigation }) {
    // function 
    const backClick = function () {
        navigation.navigate("Halal center");
    }
    // 
    return (
        <SafeAreaView style={[GS.bgWhite, GS.h100]}>
            {/* top bar */}
            <TopBar title="Halal center"
                backButton={true}
                backClick={backClick}
                nosearch={true}
                showFavorite={true}
            />
            <ScrollView style={[{ backgroundColor: "#fff" }]}>
                {/* content */}
                <MainContent />
                {/* read others */}
            </ScrollView>
        </SafeAreaView>
    );
}
// specific style
const Style = StyleSheet.create({

})