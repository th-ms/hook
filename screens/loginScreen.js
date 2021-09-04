import React, { useRef, useState } from "react";
import { Text, Dimensions, ScrollView, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
// Custom Component Imports
import PhoneInput from 'react-native-phone-number-input';
import StyledButton from '../components/StyledButton';
// SVG Imports
import PhoneWaves from '../assets/phoneWaves.svg';
import Hook from '../assets/hook.svg'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ({ navigation, route }) => {
    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);

    return (
    <KeyboardAwareScrollView style={{
        backgroundColor: '#FFFFFF',
    }} contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }} enableOnAndroid={true} bounces={false} extraHeight={100}>
        <PhoneWaves width={width} height={height} style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
        }}/>
        <Hook style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
        }}/>
        <Text style={{
            color: "#FFFFFF",
            position: "absolute",
            fontSize: RFValue(110, 812),
            fontFamily: 'Lato_700Bold',
            textAlign: "center",
            width: width,
            top: RFPercentage(15)
        }}>Hook</Text>
        <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="US"
            layout="second"
            onChangeCountry={(text) => {
                setCountryCode(text);
            }}
            onChangeText={(text) => {
                setPhoneNumber(text);
            }}
            onChangeFormattedText={(text) => {
                setFormattedValue(text);
            }}
            withDarkTheme
            containerStyle={{
                width: RFValue(288, 812),
                marginBottom: RFValue(45, 812),
                marginTop: RFValue(75, 812),
                backgroundColor: 'rgba(71,59,240,0.06)',
                borderRadius: 12,
                height: RFValue(64, 812),
            }}
            textContainerStyle={{
                backgroundColor: 'rgba(71,59,24,0)',
                fontFamily: "Lato_400Regular",
            }}
        />
        <StyledButton title="Submit" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
            let numberCheck = new RegExp('^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$');
            console.log(numberCheck.test(phoneNumber))
            setValid(numberCheck.test(phoneNumber) ? true : false)
            console.log(valid, phoneNumber)

        }}/>
    </KeyboardAwareScrollView>
)}