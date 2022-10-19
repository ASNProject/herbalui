// lib
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@iconify/react';
// screen
import Home from './MainScreen/Home';
import Consultation from './MainScreen/Consultation';
import Products from './MainScreen/Profile';
import Profile from './MainScreen/Profile';
// screem names
const HomeName = 'Home';
const ConsultationName = 'Konsultasi';
const ProductsName = 'Produk';
const ProfileName = 'Profil';
// icons
import HomeIcon from '../../assets/icons/bx_home-alt-2.svg'
import HomeIconActive from '../../assets/icons/bx_home-alt-2_active.svg'
import ConsultationIcon from '../../assets/icons/akar-icons_chat-dots.svg'
import ConsultationIconActive from '../../assets/icons/akar-icons_chat-dots_active.svg'
import ProductIcon from '../../assets/icons/fluent-emoji-high-contrast_herb.svg'
import ProductIconActive from '../../assets/icons/fluent-emoji-high-contrast_herb_active.svg'
import ProfileIcon from '../../assets/icons/iconoir_profile-circled.svg'
import ProfileIconActive from '../../assets/icons/iconoir_profile-circled_active.svg'
// variable
const Tab = createBottomTabNavigator();
// content
export default function MainNavigation() {
    return (
        <Tab.Navigator
            initialRouteName={HomeName}
            tabBarOptions={{
                activeTintColor: "#00A6A6"
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === HomeName) {
                        if (focused) {
                            return <HomeIconActive width={50} height={20} />
                        } else {
                            return <HomeIcon width={50} height={20} />
                        }
                    }
                    else if (rn === ConsultationName) {
                        if (focused) {
                            return <ConsultationIconActive width={50} height={20} />
                        } else {
                            return <ConsultationIcon width={50} height={20} />
                        }
                    }
                    else if (rn === ProductsName) {
                        if (focused) {
                            return <ProductIconActive width={50} height={20} />
                        } else {
                            return <ProductIcon width={50} height={20} />
                        }
                    }
                    else if (rn === ProfileName) {
                        if (focused) {
                            return <ProfileIconActive width={50} height={20} />
                        } else {
                            return <ProfileIcon width={50} height={20} />
                        }
                    }
                }
            })}

        >

            <Tab.Screen name={HomeName} component={Home} options={{ headerShown: false }} />
            <Tab.Screen name={ProductsName} component={Products} options={{ headerShown: false }} />
            <Tab.Screen name={ConsultationName} component={Consultation} options={{ headerShown: false }} />
            <Tab.Screen name={ProfileName} component={Profile} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}