import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AuthInput = ({ placeholder,onChangeText, imageSrc, imageStyle}) => {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor="#747688"
      style={{ fontFamily: "light", fontSize: 14 }}
      leftIcon={
        <Image
          source={imageSrc}
          style={imageStyle}
        />
      }
      leftIconContainerStyle={{
        marginLeft: 15,
        marginRight: 10,
        paddingTop: 0,
      }}
      inputContainerStyle={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E4DFDF",
        height: 56,
        marginTop: 0,
        marginHorizontal: -10,
      }}
    />
  );
};

export default AuthInput;

const styles = StyleSheet.create({});
