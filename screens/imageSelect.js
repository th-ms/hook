import React, { useReducer } from "react";
import { View, Text, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// Custom Component Imports
import StyledButton from "../components/StyledButton";
import ImageSelector from "../components/ImageSelector";
// SVG Imports
import TopWaves from "../assets/topWaves2.svg";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default ({ navigation, route }) => {
  const { gender, preference, goal, name, birthday, phoneNumber } =
    route.params;
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopWaves
        height={height/2}
        style={{
          bottom: height/1.5,
          position: "absolute",
        }}
      />
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: RFPercentage(5),
          fontFamily: "Lato_700Bold",
          bottom: height/1.2,
          position: "absolute",
        }}
      >
        Add some pictures! 🤳
      </Text>
      <View style={{ flexDirection: "row", marginTop: RFValue(36, 812) }}>
        <ImageSelector dispatch={dispatch} />
        <ImageSelector dispatch={dispatch} />
        <ImageSelector dispatch={dispatch} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ImageSelector dispatch={dispatch} />
        <ImageSelector dispatch={dispatch} />
        <ImageSelector dispatch={dispatch} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ImageSelector dispatch={dispatch} />
        <ImageSelector dispatch={dispatch} />
        <ImageSelector dispatch={dispatch} />
      </View>
      <StyledButton
        disabled={state.count >= 3 ? false : true}
        btnStyle={{ marginTop: RFValue(20, 812) }}
        title="Continue"
        backgroundColor="#473BF0"
        pressedColor="#3129A8"
        onPress={() => {
          navigation.push("generateAvatar", { gender, preference, goal, name, birthday, phoneNumber });
        }}
      />
      <Text
        style={{
          color: "rgba(0, 0, 0, 0.20)",
          fontSize: RFValue(16, 812),
          fontFamily: "Lato_400Regular",
          textAlign: "center",
          marginTop: RFValue(10, 812),
          marginBottom: RFValue(10, 812),
        }}
      >
        At least 3 pictures
      </Text>
    </View>
  );
};
