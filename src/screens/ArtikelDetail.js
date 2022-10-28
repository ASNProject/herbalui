// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import GS from "./style/GlobalStyle";
import CardArtikel from "./component/Card-Artikel";
// images
import BackIcon from "../../assets/icons/back_button.svg"
import FavoriteIcon from "../../assets/icons/favorite.svg"
import artikel_1 from "../../assets/images/artikel_1.png";
import artikel_2 from "../../assets/images/artikel_2.png";
import artikel_3 from "../../assets/images/artikel_3.png";
// component topbar
const TopBar = function (props) {
    return (
        <View style={[GS.TopBar]}>
            <View style={[GS.container, GS.flexRow, GS.justifySpaceBetween, GS.alignItemsCenter]}>
                <View style={[GS.flexRow, GS.alignItemsCenter]}>
                    <TouchableOpacity onPress={props.backClick}>
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={[GS.ml2, GS.fwMedium, GS.fs4]}>Baca Artikel</Text>
                </View>
                <TouchableOpacity>
                    <FavoriteIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}
//
const MainContent = function () {
    return (
        <View style={[GS.container, GS.mt4]}>
            <Text style={[GS.fs2, GS.fwMedium]}>
                5 manfaat meditasi yang belum banyak orang tahu
            </Text>
            <Text style={[GS.fs6, GS.fwLight]}>Di publikasikan pada 3 oktober 2022</Text>
            <Image source={artikel_1} style={[Style.imageArticle, GS.mt3]} />
            <Text style={[GS.mt3, GS.fwLight]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet eros eget ipsum tempus dictum. Aliquam quis rhoncus orci, at bibendum elit. In eget odio luctus purus tincidunt pulvinar. Curabitur id tortor at lorem sodales fringilla. Donec augue sem, rutrum in urna quis, consequat porttitor tellus. Nulla ac condimentum lorem. Sed ultricies feugiat ex. Cras mollis justo quis ante vulputate, eu tristique enim commodo. Sed pretium vitae augue eu pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam id diam lectus. Sed tempor augue augue, sed tristique neque porta ac.
            </Text>
        </View>
    )
}
// content
export default function ArtikelDetail({ navigation }) {
    // function 
    const backPage = function () {
        navigation.navigate("Artikel");
    }
    const CardClick = function () {
        navigation.navigate("ArtikelDetail");
    }
    // 
    return (
        <ScrollView style={[{ backgroundColor: "#fff" }]}>
            <SafeAreaView>
                {/* top bar */}
                <TopBar backClick={backPage} />
                {/* content */}
                <MainContent />
                {/* read others */}
                <View style={[GS.container, GS.mt5, Style.sectionRecomend, GS.pt3]}>
                    <Text style={[GS.fs5, GS.pb2]}>Baca lainya</Text>
                    {/* card */}
                    <CardArtikel whenCardClick={CardClick} image={artikel_1}
                        title="5 manfaat meditasi yang belum banyak orang tahu"
                        publishDate="Dipublikaiskan 10 mei 2022"
                    />
                    {/* card */}
                    <CardArtikel whenCardClick={CardClick} image={artikel_2}
                        title="5 manfaat meditasi yang belum banyak orang tahu"
                        publishDate="Dipublikaiskan 10 mei 2022"
                    />
                    {/* card */}
                    <CardArtikel whenCardClick={CardClick} image={artikel_3}
                        title="5 manfaat meditasi yang belum banyak orang tahu"
                        publishDate="Dipublikaiskan 10 mei 2022"
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
// specific style
const Style = StyleSheet.create({
    imageArticle: {
        width: "100%",
        height: 200,
    },
    sectionRecomend: {
        borderTopWidth: 1,
        borderTopColor: "#D9D9D9"
    }
})