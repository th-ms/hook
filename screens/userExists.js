import React from "react";
import { View, Text } from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
// Custom Component Imports
import StyledButton from "../components/StyledButton";
// SVG Imports
import Waves from '../assets/waves.svg';

export default ({ navigation, route }) => (
    <View style={{
      flex: 1,
      backgroundColor: '#0093E9',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
        <Waves style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}/>
        <Text style={{
          color: "#FFFFFF",
          fontSize: RFValue(48, 812),
          fontFamily: 'Lato_700Bold',
          marginBottom: RFPercentage(20)
        }}>Hi, Thomas! 👋</Text>
        <Text style={{
          color:"#FFFFFF",
          fontSize: RFValue(36, 812),
          fontFamily: 'Lato_700Bold',
          marginBottom: RFPercentage(15)
        }}>Welcome back!</Text>
        <StyledButton title="Continue" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
          navigation.push('signUpScreen')
        }}/>
    </View>
  )
  