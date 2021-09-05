import React, { useRef, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Text, Dimensions, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
// Custom Component Imports
import StyledButton from '../components/StyledButton';
// SVG Imports
import Hook from '../assets/topWaves.svg'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ({ navigation, route }) => {

    const [valid, setValid] = useState(false);
    const [gender, setGender] = useState("");
    const [preference, setPreference] = useState("");
    const [goal, setGoal] = useState("");

    const dropdownViewStyle={
        alignItems:"center",
        justifyContent:"center",
    }
    const dropdownStyle={
        inputIOS:{
            width: RFValue(288,812),
            height: RFValue(64, 812),
            paddingLeft: RFPercentage(3),
            backgroundColor: 'rgba(71,59,240,0.06)',
            borderRadius: 12,
            marginBottom: RFValue(45, 812),
            fontFamily: "Lato_400Regular",
            fontSize: RFValue(18, 812),
        },
        inputAndroid:{
            width: RFValue(288,812),
            height: RFValue(64, 812),
            paddingLeft: RFPercentage(3),
            backgroundColor: 'rgba(71,59,240,0.06)',
            borderRadius: 12,
            marginBottom: RFValue(45, 812),
            fontFamily: "Lato_400Regular",
            fontSize: RFValue(18, 812),
        },
        placeholder:{
            color:'rgba(0,147,233,.5)',
        }
    }
    return (
    <View style={{
        backgroundColor:'#FFFFFF',
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }}enableOnAndroid={true} bounces={false} extraHeight={100}>
    <Hook style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    }}/>
    <Text style={{
        color: "#FFFFFF",
        position: "absolute",
        fontSize: RFValue(35, 812),
        fontFamily: 'Lato_700Bold',
        textAlign: "center",
        width: width,
        top: RFPercentage(11)
    }}>Tell us about yourself!</Text>
    <View style={dropdownViewStyle}>
    <RNPickerSelect
        style={dropdownStyle}
        placeholder={{ label: "Select Gender...", value: null}}
        onValueChange={(value) => setGender(value)}
        items={[
            { label: "Male", value: "male"},
            { label: "Female", value: "female"},
            { label: "Other", value: "other"},
        ]}
    />
    </View>
    <View style={dropdownViewStyle}>
    <RNPickerSelect
        style={dropdownStyle}
        placeholder={{ label: "Talk with...", value: null}}
        onValueChange={(value) => setPreference(value)}
        items={[
            { label: "Male", value: "male"},
            { label: "Female", value: "female"},
            { label: "Other", value: "other"},
        ]}
    />
    </View>
    <View style={dropdownViewStyle}>
    <RNPickerSelect
        style={dropdownStyle}
        placeholder={{ label: "What do you want from Hook?", value: null}}
        onValueChange={(value) => setGoal(value)}
        items={[
            { label: "Friend", value: "friend"},
            { label: "Relationship", value: "relationship"},
            { label: "Hookup", value: "hookup" },
        ]}
    />
    </View>
    <StyledButton disabled={(gender && preference && goal) ? false: true} title="Continue" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
        navigation.push("imageSelect");
    }}/>
    </View>
)}