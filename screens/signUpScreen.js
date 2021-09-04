import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
// Custom Component Imports
import StyledButton from '../components/StyledButton';
// SVG Imports
import TopWaves from '../assets/topWaves.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ({ navigation, route }) => (
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
          defaultCode="US"
          layout="second"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          containerStyle={{
            width: RFValue(288, 812),
            marginBottom: RFValue(45, 812),
            backgroundColor: 'rgba(71,59,240,0.06)',
            borderRadius: 12,
            height: RFValue(64, 812)
          }}
          textContainerStyle={{
            backgroundColor: 'rgba(71,59,24,0)',
            fontFamily: "Lato_400Regular",
          }}
        />
      <TextInput width={ RFValue(288, 812) } placeholder={'First Name'} style={{
        height: RFValue(64, 812),
        paddingLeft: RFPercentage(3),
        backgroundColor: 'rgba(71,59,240,0.06)',
        borderRadius: 12,
        marginBottom: RFValue(45, 812),
        fontFamily: "Lato_400Regular"
      }}/>
      <TextInput width={ RFValue(288, 812) } placeholder={'Birthday'} style={{
        height: RFValue(64, 812),
        paddingLeft: RFPercentage(3),
        backgroundColor: 'rgba(71,59,240,0.06)',
        borderRadius: 12,
        marginBottom: RFValue(45, 812),
        fontFamily: "Lato_400Regular"
      }}/>
      <StyledButton title="Sign Up" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
          navigation.push('hookScreen')
      }}/>
    </View>
  )