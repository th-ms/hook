import React, { useState } from 'react';
import AppLoading  from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import hookScreen from './screens/loginScreen';
import signUpScreen from './screens/signUpScreen';
import userExists from './screens/userExists';
import securityCheck from './screens/securityCheck';

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
          <Stack.Screen name="securityCheck" component={securityCheck} />
          <Stack.Screen name="hookScreen" component={hookScreen} />
          <Stack.Screen name="userExists" component={userExists} />
          <Stack.Screen name="signUpScreen" component={signUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}