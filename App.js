import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screen
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Splashscreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Reset from './src/screens/Reset';
import Daftar from './src/screens/Daftar';
import ListProduk from './src/screens/Produk';
import MenuBar from './src/screens/component/menubar';
import MenuBar2 from './src/screens/component/menubar_produk';
import Artikel from './src/screens/Artikel';
import MainNavigation from './src/screens/MainNavigation';
import HerbalEduDetail from './src/screens/MainScreen/HerbalEduDetail';
import HalalCenterDetail from './src/screens/MainScreen/HalalCenterDetail';
import ConsultationDetail from './src/screens/MainScreen/ConsultationDetail';
import Profile from './src/screens/Profile';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';
import ProductDetail from './src/screens/ProductDetail';
import ProfileEdit from './src/screens/ProfileEdit';
import ChangePassword from './src/screens/ChangePassword';
import Favorite from './src/screens/Favorite';
import FavoriteProduct from './src/screens/FavoriteProduct';
import FavoriteArtikel from './src/screens/FavoriteArticle';
// variable
const Stack = createNativeStackNavigator();
// content
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
        <Stack.Screen name="HerbalEduDetail" component={HerbalEduDetail} />
        <Stack.Screen name="HalalCenterDetail" component={HalalCenterDetail} />
        <Stack.Screen name="ConsultationDetail" component={ConsultationDetail} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="FavoriteProduct" component={FavoriteProduct} />
        <Stack.Screen name="FavoriteArtikel" component={FavoriteArtikel} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="ListProduk" component={ListProduk} />
        <Stack.Screen name="MenuBar" component={MenuBar} />
        <Stack.Screen name="MenuBar2" component={MenuBar2} />
        <Stack.Screen name="Artikel" component={Artikel} />
        <Stack.Screen name="SplashScreen" component={Splashscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//
export default App;
