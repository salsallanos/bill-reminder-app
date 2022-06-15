import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Text, Button, Input } from "@rneui/base";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { makeStyles } from "@rneui/themed";
import SignInUpBtn from "../components/SignInUpBtn";
import SocialButton from "../components/SocialButton";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const styles = useStyles(props);

  const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(authUser.user, {
          displayName: name,
          photoURL:
            imageUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: "center" }}
      >
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 24,
              alignSelf: "flex-start",
            }}
          >
            Sign up
          </Text>
          <Input
            placeholder="Full Name"
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor="#747688"
            style={{ fontFamily: "light", fontSize: 14 }}
            leftIcon={
              <Image
                source={require("../assets/images/user.png")}
                style={{ width: 25, height: 25 }}
              />
            }
            leftIconContainerStyle={{ marginLeft: 15, marginRight: 10 }}
            inputContainerStyle={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#E4DFDF",
              height: 56,
              marginTop: 20,
              marginHorizontal: -10,
            }}
          />
          <Input
            placeholder="abc@email.com"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#747688"
            style={{ fontFamily: "light", fontSize: 14 }}
            leftIcon={
              <Image
                source={require("../assets/images/email.png")}
                style={{ width: 25, height: 25 }}
              />
            }
            leftIconContainerStyle={{ marginLeft: 15, marginRight: 10 }}
            inputContainerStyle={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#E4DFDF",
              height: 56,
              marginTop: 0,
              marginHorizontal: -10,
            }}
          />
          <Input
            placeholder="Your password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#747688"
            style={{ fontFamily: "light", fontSize: 14 }}
            leftIcon={
              <Image
                source={require("../assets/images/password.png")}
                style={{ width: 25, height: 25 }}
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
          <Input
            placeholder="Confirm password"
            type="password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setconfirmPassword(text)}
            placeholderTextColor="#747688"
            style={{ fontFamily: "light", fontSize: 14 }}
            leftIcon={
              <Image
                source={require("../assets/images/password.png")}
                style={{ width: 25, height: 25 }}
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
          <View style={styles.btnContainer}>
            <SignInUpBtn
              buttonTitle="SIGN UP"
              btnType="google"
              color="#FFF"
              backgroundColor="#5669FF"
              onPress={() => {}}
            />

            <Text style={styles.or}>OR</Text>
            <SocialButton
              buttonTitle="Sign Up with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
            <SocialButton
              buttonTitle="Sign Up with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />
            <TouchableOpacity
              onPress={() => props.navigation.replace("Login")}
            >
              <Text
                style={{
                  fontFamily: "regular",
                  marginTop: 15,
                  alignSelf: "center",
                }}
              >
                {" "}
                Already have an account?{" "}
                <Text style={{ color: "#3D56F0" }}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  btnContainer: {
    marginTop: 20,
    //paddingHorizontal: 30,
    width: "100%",
  },
  or: {
    fontFamily: "regular",
    color: "#9D9898",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
  },
}));
