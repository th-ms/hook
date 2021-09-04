import React, { useState } from 'react';
import AppLoading  from 'expo-app-loading';
import { TextInput, SafeAreaView, StyleSheet, Text, Pressable, View, ImageBackground, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Waves from './assets/waves.svg';
import TopWaves from './assets/topWaves.svg'
import PhoneWaves from './assets/phoneWaves.svg'
import Hook from './assets/hook.svg'
import tailwind from 'tailwind-rn';
import StyledButton from './components/StyledButton';
import PhoneInput from 'react-native-phone-number-input';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';

const welcomeScreen = ({ navigation, route }) => (
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

const originalWidth = 375;
const originalHeight = 812;
const aspectRatio = originalWidth / originalHeight;

const hookScreen = ({ navigation, route }) => (
  <View style={{
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
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
      fontSize: RFValue(110, 812),
      fontFamily: 'Lato_700Bold',
      top: RFPercentage(15),
      position: 'absolute'
    }}>Hook</Text>
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
          marginTop: RFValue(75, 812),
          backgroundColor: 'rgba(71,59,240,0.06)',
          borderRadius: 12,
          height: RFValue(64, 812)
        }}
        textContainerStyle={{
          backgroundColor: 'rgba(71,59,24,0)',
          fontFamily: "Lato_400Regular",
        }}
      />
    <StyledButton title="Submit" backgroundColor="#473BF0" pressedColor="#3129A8" onPress={() => {
        navigation.push('welcomeScreen')
    }}/>
  </View>
)

const signUpScreen = ({ navigation, route }) => (
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

const Stack = createNativeStackNavigator();

export default function App() {

  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="hookScreen" component={hookScreen} />
          <Stack.Screen name="welcomeScreen" component={welcomeScreen} />
          <Stack.Screen name="signUpScreen" component={signUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}