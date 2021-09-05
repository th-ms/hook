import React, { useState } from "react";
import { Text, Dimensions, TextInput, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
// Custom Component Imports
import StyledButton from '../components/StyledButton';
// SVG Imports
import TopWaves from '../assets/topWaves.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ({ navigation, route }) => {

  const { phoneNumber } = route.params;
  const [message, setMessage] = useState('Please enter the security code we texted to you.')
  const [securityCode, setSecurityCode] = useState('');
  const [validCode, setValidCode] = useState(false);

  return (
  <KeyboardAwareScrollView style={{
      backgroundColor: '#FFFFFF',
  }} contentContainerStyle={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }} enableOnAndroid={true} bounces={false} extraHeight={120}>
      <TopWaves width={width} height={height} style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
    }}/>
    <Text style={{
      color: "#FFFFFF",
      fontSize: RFValue(48, 812),
      fontFamily: 'Lato_700Bold',
      top: RFValue(80, 812),
      position: 'absolute'
    }}> You legit? 🤔️</Text>
      <Text style={{
          color: "rgba(0, 0, 0, 0.80)",
          fontSize: RFValue(24, 812),
          fontFamily: 'Lato_700Bold',
          textAlign: "center",
          paddingLeft: RFValue(56, 812),
          paddingRight: RFValue(56, 812),
          marginBottom: RFValue(43, 812)
      }}>{ message }</Text>
      <TextInput maxLength={6} keyboardType="number-pad" width={ RFValue(288, 812) } placeholderTextColor={'rgba(0, 0, 0, 0.25)'} placeholder={'Security Code'} style={{
      height: RFValue(64, 812),
      paddingLeft: RFPercentage(3),
      backgroundColor: 'rgba(71,59,240,0.06)',
      borderRadius: 12,
      marginBottom: RFValue(45, 812),
      fontFamily: "Lato_400Regular",
      fontSize: RFValue(18, 812)
    }} onChangeText={code => {
      setSecurityCode(code)
      if (code.length === 6) {
          setValidCode(true)
      } else {
          setValidCode(false)
      }
    }}/>
      <StyledButton disabled={validCode ? false: true} title="Submit" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
          // Put auth process here
          if (securityCode === '123456') {
            navigation.push("signUpScreen", { phoneNumber })
          } else {
            setMessage(`That's not quite right... \n Try again or go back to change the number.`)
          }
      }}/>
      <TouchableWithoutFeedback onPress={() => {
        navigation.goBack()
      }}>
        <Text style={{
          color: "rgba(0, 0, 0, 0.20)",
          fontSize: RFValue(16, 812),
          fontFamily: 'Lato_400Regular',
          marginTop: RFValue(22.5, 812)
        }}> <Icon name="arrow-back" size={RFValue(16, 812)} color="rgba(0, 0, 0, 0.20)" /> Go Back</Text>
      </TouchableWithoutFeedback> 
  </KeyboardAwareScrollView>
)}