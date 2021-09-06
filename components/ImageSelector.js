import React, { useState } from "react";
import { Pressable, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

function ImageSelector(props) {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);
    // Example result
    /* Object {
            "cancelled": false,
            "height": 3025,
            "type": "image",
            "uri": "file:///var/mobile/Containers/Data/Application/488CDFF1-46FD-48DF-B97B-374B2C9C5E7D/Library/Caches/ExponentExperienceData/%2540anonymous%252FtestReactApp-0fa759b0-006b-4492-9243-226b28c85c98/ImagePicker/64892E85-0F19-4F24-AAC8-66BD13441646.jpg",
            "width": 3024,
        } */

    if (!result.cancelled) {
      if (!image) {
        props.dispatch({ type: "increment" });
      }
      setImage(result.uri);
    }
  };
  return (
    <Pressable
      style={{
        aspectRatio: 1,
        backgroundColor: "rgba(71, 59, 240, 0.06)",
        margin: RFValue(15, 812),
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={pickImage}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
      {!image && (
        <Icon
          name="plus"
          size={RFValue(90, 812)}
          color="rgba(50, 50, 50, 0.10)"
        />
      )}
    </Pressable>
  );
}

export default ImageSelector;
