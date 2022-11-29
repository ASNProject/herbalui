// import
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GS from '../style/GlobalStyle';
import TopBar from '../component/TopBar1';
// images
import BackIcon from '../../../assets/icons/back_button.svg';
import FavoriteIcon from '../../../assets/icons/favorite.svg';
import FavoriteYellowIcon from '../../../assets/icons/favorite_yellow.svg';

// content
export default function HerbalEduDetail({ navigation, route }) {
  // function
  const backClick = function () {
    navigation.navigate('Herbal edu');
  };
  //
  return (
    <SafeAreaView style={[GS.h100, GS.bgWhite]}>
      {/* top bar */}
      <TopBar
        title="Herbal edu"
        backButton={true}
        backClick={backClick}
        nosearch={true}
        showFavorite={true}
      />
      <ScrollView style={[{ backgroundColor: '#fff' }]}>
        {/* content */}
        <View style={[GS.container, GS.mt4]}>
          <Text style={[GS.fs2, GS.fwMedium]}>{route.params.title}</Text>
          <Text style={[GS.fs6, GS.fwLight]}>
            Di publikasikan pada 3 oktober 2022
          </Text>
          <Text style={[GS.mt3, GS.fwLight]}>{route.params.body}</Text>
        </View>
        {/* read others */}
      </ScrollView>
    </SafeAreaView>
  );
}
// specific style
const Style = StyleSheet.create({});
