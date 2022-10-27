// import
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import GS from "./style/GlobalStyle";
// icons
import BackIcon from "../../assets/icons/back_button.svg"
import Eye from "../../assets/icons/akar-icons_eye.svg"
import EyeClose from "../../assets/icons/ant-design_eye-invisible-outlined"
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
                        <Text style={[GS.fwMedium, GS.fs4]}>Ganti password</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
//
const MainContent = function (props) {
    return (
        <View style={[GS.container, GS.mt4, GS.flexColumn, GS.alignItemsCenter]}>
            {/* password lama */}
            <View style={[GS.w100]}>
                <Text style={[GS.mb1]}>Password lama</Text>
            </View>
            <View style={[Style.pass, GS.mb4]}>
                <TextInput
                    style={[Style.input_password, GS.darkShadow]}
                    placeholder="password"
                    placeholderTextColor={'#A0A0A0'}
                    secureTextEntry={props.secureTextEntry}
                    value={props.password}
                    onChangeText={password => props.setPassword(password)}></TextInput>
                {
                    props.secureTextEntry ?
                        (
                            <TouchableOpacity
                                style={Style.eye_icon}
                                onPress={() => { props.handleEye('hide') }}
                            >
                                <Eye width={50} height={20} />
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity
                                style={Style.eye_icon}
                                onPress={() => { props.handleEye('show') }}
                            >
                                <EyeClose width={50} height={20} />
                            </TouchableOpacity>
                        )

                }
            </View>
            {/* password baru */}
            <View style={[GS.w100]}>
                <Text style={[GS.mb1]}>Password baru</Text>
            </View>
            <View style={[Style.pass, GS.mb4]}>
                <TextInput
                    style={[Style.input_password, GS.darkShadow]}
                    placeholder="password"
                    placeholderTextColor={'#A0A0A0'}
                    secureTextEntry={props.secureTextEntry}
                    value={props.password}
                    onChangeText={password => props.setPassword(password)}></TextInput>
                {
                    props.secureTextEntry ?
                        (
                            <TouchableOpacity
                                style={Style.eye_icon}
                                onPress={() => { props.handleEye('hide') }}
                            >
                                <Eye width={50} height={20} />
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity
                                style={Style.eye_icon}
                                onPress={() => { props.handleEye('show') }}
                            >
                                <EyeClose width={50} height={20} />
                            </TouchableOpacity>
                        )

                }
            </View>
            {/* konfirmasi password baru */}
            <View style={[GS.w100]}>
                <Text style={[GS.mb1]}>Konfirmasi Password baru</Text>
            </View>
            <View style={[Style.pass, GS.mb4]}>
                <TextInput
                    style={[Style.input_password, GS.darkShadow]}
                    placeholder="password"
                    placeholderTextColor={'#A0A0A0'}
                    secureTextEntry={props.secureTextEntry}
                    value={props.password}
                    onChangeText={password => props.setPassword(password)}></TextInput>
                {
                    props.secureTextEntry ?
                        (
                            <TouchableOpacity
                                style={Style.eye_icon}
                                onPress={() => { props.handleEye('hide') }}
                            >
                                <Eye width={50} height={20} />
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity
                                style={Style.eye_icon}
                                onPress={() => { props.handleEye('show') }}
                            >
                                <EyeClose width={50} height={20} />
                            </TouchableOpacity>
                        )

                }
            </View>
            {/* button konfirmasi */}
            <View style={[GS.py4, GS.container, { width: "100%" }]}>
                <TouchableOpacity
                    onPress={props.updateClick}
                    style={[Style.buttonCheckout, GS.flexRow, GS.justifyContentCenter, GS.alignItemsCenter]}>
                    <Text style={[GS.whiteColor, GS.fs3]}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// content  
export default function ChangePassword({ navigation }) {
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    // function 
    const backPage = function () {
        navigation.navigate("ProfileEdit");
    }
    const updateClick = function () {
        alert("updating")
    }
    function handleEye(condition) {
        if (condition == 'show') {
            setSecureTextEntry(true)
        } else {
            setSecureTextEntry(false)
        }
    }
    // 
    return (
        <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <ScrollView style={[{ backgroundColor: "#fff" }]} showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {/* top bar */}
                    <TopBar backClick={backPage} />
                    {/* content */}
                    <MainContent
                        password={password} setPassword={setPassword}
                        secureTextEntry={secureTextEntry} handleEye={handleEye}
                        updateClick={updateClick} />
                </SafeAreaView>
            </ScrollView>
        </View >
    );
}
// specific style
const Style = StyleSheet.create({
    buttonCheckout: {
        backgroundColor: "#00A6A6",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 1000,
    },
    eye_icon: {
        position: "absolute",
        right: 0,
        top: 10,
    },
    input_password: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        flex: 1,
        borderWidth: 1,
        borderColor: "#00A6A6",
        padding: 10,
        borderRadius: 3,
        paddingVertical: 10
    },
    pass: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 40,
    },
})