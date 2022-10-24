// lib
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@iconify/react';
// screen
import Home from './MainScreen/Home';
import Consultation from './MainScreen/Consultation';
import HerbalEdu from './MainScreen/HerbalEdu';
import HalalCenter from './MainScreen/HalalCenter';
import Products from './MainScreen/Products';
// screem names
const HomeName = 'HomeMain';
const ConsultationName = 'Konsultasi';
const HerbalEduName = "Herbal edu";
const HalalCenterName = "Halal center";
const ProdukName = "Produk";
// icons
import HomeIcon from '../../assets/icons/bx_home-alt-2.svg'
import HomeIconActive from '../../assets/icons/bx_home-alt-2_active.svg'
import ConsultationIcon from '../../assets/icons/akar-icons_chat-dots.svg'
import ConsultationIconActive from '../../assets/icons/akar-icons_chat-dots_active.svg'
import HalalCenterIcon from "../../assets/icons/halal.svg"
import HalalCenterIconActive from "../../assets/icons/halal_active.svg"
import HerbalEduIcon from "../../assets/icons/herbal_edu.svg"
import HerbalEduIconActive from "../../assets/icons/herbal_edu_active.svg"
import ProdukIcon from "../../assets/icons/fluent-emoji-high-contrast_herb.svg"
import ProdukIconActive from "../../assets/icons/fluent-emoji-high-contrast_herb_active.svg"
import Product from '../../Product';
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
                            return <HomeIconActive width={25} height={25} />
                        } else {
                            return <HomeIcon width={25} height={25} />
                        }
                    }
                    else if (rn === ConsultationName) {
                        if (focused) {
                            return <ConsultationIconActive width={25} height={25} />
                        } else {
                            return <ConsultationIcon width={25} height={25} />
                        }
                    }
                    else if (rn === HerbalEduName) {
                        if (focused) {
                            return <HerbalEduIconActive width={25} height={25} />
                        } else {
                            return <HerbalEduIcon width={25} height={25} />
                        }
                    }
                    else if (rn === HalalCenterName) {
                        if (focused) {
                            return <HalalCenterIconActive width={25} height={25} />
                        } else {
                            return <HalalCenterIcon width={25} height={25} />
                        }
                    }
                    else if (rn === ProdukName) {
                        if (focused) {
                            return <ProdukIconActive width={25} height={25} />
                        } else {
                            return <ProdukIcon width={25} height={25} />
                        }
                    }
                }
            })}

        >

            <Tab.Screen name={HomeName} component={Home} options={{ headerShown: false }} />
            <Tab.Screen name={ProdukName} component={Products} options={{ headerShown: false }} />
            <Tab.Screen name={HerbalEduName} component={HerbalEdu} options={{ headerShown: false }} />
            <Tab.Screen name={HalalCenterName} component={HalalCenter} options={{ headerShown: false }} />
            <Tab.Screen name={ConsultationName} component={Consultation} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}