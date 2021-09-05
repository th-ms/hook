import React, { useState, useRef } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// Custom Component Imports
import StyledButton from '../components/StyledButton';
// SVG Imports
import TopWaves from '../assets/topWaves.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ({ navigation, route }) => {
  
  
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  const phoneInput = useRef(null);
  const [date, setDate] = useState(new Date())
  const [formattedDate, setFormattedDate] = useState();
  const [open, setOpen] = useState(false);
  const showDatePicker = () => {
    setOpen(true);
  };
  const hideDatePicker = () => {
    setOpen(false);
  };
  const handleConfirm = (date) => {
    setDate(date)
    setFormattedDate(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear())
    hideDatePicker();
  };

  return (
  <View style={{
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
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
    }}>Welcome! ✌️</Text>
    <PhoneInput
      disabled
      ref={phoneInput}
      defaultValue={phoneNumber}
      defaultCode="US"
      layout="second"
      countryPickerProps={{
          countryCodes: ['US']
      }}
      countryPickerButtonStyle={{
          display: "none"
      }}
      onChangeCountry={(text) => {
          
      }}
      onChangeText={(text) => {
          
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
          paddingLeft: RFValue(24, 812),
      }}
      textInputStyle={{
        color: 'rgba(0, 0, 0, 0.25)'
      }}
    />
    <TextInput width={ RFValue(288, 812) } placeholderTextColor={'rgba(0, 0, 0, 0.25)'} placeholder={'First Name'} style={{
      height: RFValue(64, 812),
      paddingLeft: RFPercentage(3),
      backgroundColor: 'rgba(71,59,240,0.06)',
      borderRadius: 12,
      marginBottom: RFValue(45, 812),
      fontFamily: "Lato_400Regular",
      fontSize: RFValue(18, 812)
    }}/>
    {/* <TextInput width={ RFValue(288, 812) } placeholder={'Birthday'} placeholderTextColor={'rgba(0, 0, 0, 0.25)'} style={{
      height: RFValue(64, 812),
      paddingLeft: RFPercentage(3),
      backgroundColor: 'rgba(71,59,240,0.06)',
      borderRadius: 12,
      marginBottom: RFValue(45, 812),
      fontFamily: "Lato_400Regular",
      fontSize: RFValue(18, 812)
    }}/> */}
    <StyledButton title={formattedDate ? formattedDate : 'Birthday'} backgroundColor='rgba(71,59,240,0.06)' pressedColor="rgba(71,59,240,0.06)" btnStyle={{
      borderRadius: 12,
      paddingLeft: RFPercentage(3),
      marginBottom: RFValue(45, 812),
      alignItems: 'stretch',
    }} txtStyle={{
      color: formattedDate ? '#000000' : 'rgba(0, 0, 0, 0.25)',
      fontSize: RFValue(18, 812)
    }} onPress={showDatePicker} />
    <DateTimePickerModal
        isVisible={open}
        mode="date"
        isDarkModeEnabled={true}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    <StyledButton title="Sign Up" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
      navigation.push('hookScreen')
    }}/>
  </View>
)}