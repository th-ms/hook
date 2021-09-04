import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { RFPercentage , RFValue} from 'react-native-responsive-fontsize';
import tailwind from 'tailwind-rn';


function StyledButton (props) {

    var [pressed, setPressed] = useState(false);

    const { onPress, title = 'Save', backgroundColor, pressedColor, disabled} = props;
    const styles = StyleSheet.create({
        btn: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 32,
          elevation: 3,
          width: RFValue(288, 812),
          height: RFValue(64, 812),
          backgroundColor,
        },
        btnDisabled: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 32,
            elevation: 3,
            width: RFValue(288, 812),
            height: RFValue(64, 812),
            backgroundColor: "#C7C4FA",
            opacity: 50
          },
        btnPressed: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 32,
            elevation: 3,
            width: RFValue(288, 812),
            height: RFValue(64, 812),
            backgroundColor: pressedColor,
        },
        text: {
          fontSize: RFValue(24, 812),
          lineHeight: 21,
          fontFamily: 'Lato_400Regular',
          letterSpacing: 0.25,
          color: 'white',
        },
    });
    return (
        <Pressable disabled={disabled} onPress={ onPress } style={() => {
            if (disabled) {
                return styles.btnDisabled
            } else if (pressed) {
                return styles.btnPressed
            } else {
                return styles.btn
            }
        } 
        } onPressIn={() => {
            setPressed(true);
        }} onPressOut={() => {
            setPressed(false);
        }}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default StyledButton
