import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
// Custom Component Imports
import StyledButton from "../components/StyledButton";
// SVG Imports
import { SvgXml } from 'react-native-svg';
import FullScreenWaves from '../assets/fullScreenWaves.svg'
const isSvg = require('is-svg');

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default ({ navigation, route }) => {
    const { gender, preference, goal, name, birthday, phoneNumber } =
    route.params;
    async function rollAvatar() {
        return new Promise((resolve, reject) => {
            fetch('https://arcane-sea-93398.herokuapp.com/create')
            .then((response) => response.json())
            .then(async (json) => {
                for (let i = 0; i < (Math.floor(Math.random() * (json.length - 20)) + 20); i++) {
                    if (isSvg(json[i])) {
                        setAvatarXML(json[i])
                        await sleep(50)
                    }
                }
                setRolled(false)
                resolve()
            })
            .catch((error) => {
              console.error(error);
            });
        })
    }
    const [rollFlag, setRollFlag] = useState(false)
    const [avatarXML, setAvatarXML] = useState(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" viewBox="0 0 500 500">
    
    <rect width="500" height="500" rx="250" fill="#ece2e1"></rect>
  
      <path fill="#50c8c6" d="M440.7 280.2c0 6.7-.4 13.1-1.2 19.2-1.1 7.9-2.9 15.2-5.3 21.9a86.3 86.3 0 01-20.7 32.6C393 374.3 362 385.2 325 390.6c-23 3.3-48.3 4.5-74.9 4.5a529 529 0 01-75-4.6c-68-9.8-115.7-38.4-115.7-110.3 0-96.3 85.4-174.3 190.7-174.3 95.7 0 175 64.4 188.6 148.3a161 161 0 012.1 26z"></path>
    
      <path fill="#32aaa8" d="M71.4 144.8c-7.5-15.8 70.4-53.2 78-37.5 8.7 23 7.8 43-1.6 60.6a32 32 0 01-33.8 16.5c-21.4-3.7-35.8-16.6-42.6-39.6zM423.4 144.8c7.6-15.8-70.3-53.2-78-37.5-8.7 23-7.7 43 1.7 60.6a32 32 0 0033.8 16.5c21.4-3.7 35.8-16.6 42.5-39.6z"></path>
    
      <path fill="#15212a" d="M249.8 294.6s-16.6-.3-16.6 4.9 11.6 18.9 16.6 18.9 16.7-14 16.7-18.9c0-5-16.7-5-16.7-5z"></path>
      <path fill="#15212a" d="M296.2 323l-.1.4a24 24 0 01-3.5 7.6 21.3 21.3 0 01-6 5.6 25 25 0 01-30.3-3.2c-1.8-2-3.1-4.4-3.8-7-.8-2.5-.9-5.2-.6-7.8l.2-1.5-1.5-.2v-.2l-.8.1h-.7v.1l-1.5.2.1 1.5c.4 2.6.3 5.3-.5 7.9-.7 2.5-2 5-3.8 6.9a25 25 0 01-30.3 3.3 21.2 21.2 0 01-6-5.7 24 24 0 01-3.5-7.6l-.1-.5-1 .3.2.4a25 25 0 003.4 8c1.6 2.5 3.7 4.6 6.2 6.3 4.9 3.3 11 4.7 16.8 4.3a25 25 0 0016.1-7.1c2.1-2.2 3.7-4.9 4.6-7.8 1 3 2.6 5.6 4.7 7.8a25 25 0 0016 7c6 .5 12-1 17-4.2a22.6 22.6 0 009.5-14.3l.1-.5-.9-.2z"></path>
      <path fill="#15212a" d="M148.9 311.9l.2-2 50.2 6.4-.2 2zM149.9 332.7l49.1-6.2.2 2-49 6.1zM160 357.1l40-21.8.9 1.8-40 21.8zM304.2 316.3l50.2-6.4.2 2-50.2 6.4zM304.2 328.5l.3-2 49 6.2-.2 2zM302.5 337l1-1.7 39.9 21.8-1 1.8z"></path>
    
      <circle fill="#15212a" cx="180.11" cy="258.32" r="17.11"></circle>
      <circle fill="#fff" cx="174.66" cy="252.88" r="5.44"></circle>
      <circle fill="#15212a" cx="320.02" cy="258.32" r="17.11"></circle>
      <circle fill="#fff" cx="314.58" cy="252.88" r="5.44"></circle>
    
      <path fill="#15212a" d="M333 196.7h-.4l-27.6-2.1a5 5 0 01.8-10l27.5 2a5 5 0 01-.3 10zM166.6 196.7h.4l27.5-2.1a5 5 0 00-.7-10l-27.6 2a5 5 0 00.4 10z"></path>
    
    </svg>`)
    const [rolled, setRolled] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FullScreenWaves
        width={width}
        height={height}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: RFValue(36, 812),
          fontFamily: "Lato_700Bold",
          marginBottom: RFValue(36, 812)
        }}
      >
        Perfect { name }!
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: RFValue(36, 812),
          fontFamily: "Lato_700Bold",
          textAlign: "center"
        }}
      >
        Now we'll give you an avatar!
      </Text>
      <SvgXml style={{ marginTop: RFValue(20, 812) }} width={RFValue(167, 812)} height={RFValue(167, 812)} xml={avatarXML} />
      <StyledButton
        disabled={rolled}
        btnStyle={{ marginTop: RFValue(20, 812) }}
        title={rollFlag ? 'Generate Another' : 'Generate Avatar'}
        backgroundColor="#473BF0"
        pressedColor="#3129A8"
        onPress={() => {
            setRolled(true)
            rollAvatar().then(() => {
                !rollFlag && setRollFlag(true)
          })
        }}
      />
      <StyledButton
        btnStyle={{ marginTop: RFValue(20, 812), opacity: (rollFlag ? 100 : 0) }}
        title="Continue"
        backgroundColor="#473BF0"
        pressedColor="#3129A8"
        onPress={() => {
            navigation.push('hookScreen')
        }}
      />
    </View>
  );
};
