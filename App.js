import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Splashscreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Reset from './src/screens/Reset';
import Daftar from './src/screens/Daftar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="SplashScreen" component={Splashscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
