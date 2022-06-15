import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Button, Input, fonts } from "@rneui/base";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { makeStyles, useTheme, Switch } from "@rneui/themed";
import Toggle from "../components/Toggle";
import SocialButton from "../components/SocialButton";
import SignInUpBtn from "../components/SignInUpBtn";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const styles = useStyles(props);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        props.navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error)
    );
  };

  const onToggle = () => {
    setChecked((previousValue) => !previousValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: "center" }}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/db.png")}
            style={{ width: 140, height: 65 }}
          />
          <Text style={{ fontFamily: "light", fontSize: 35 }}>SalsaBill</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 24,
              alignSelf: "flex-start",
            }}
          >
            Sign in
          </Text>

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
              marginTop: 20,
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

          <View style={styles.links}>
            <View style={{ flexDirection: "row" }}>
              <Toggle
                label="Remember me"
                onColor="#5669FF"
                isOn={checked}
                onToggle={onToggle}
                labelStyle={{ fontFamily: "regular" }}
              />
            </View>
            <Text
              style={{ fontFamily: "regular", marginTop: 5, marginRight: -15 }}
            >
              {" "}
              Forgot Password?
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <SignInUpBtn
              buttonTitle="SIGN IN"
              btnType="google"
              color="#FFF"
              backgroundColor="#5669FF"
              onPress={signIn}
            />
            
            <Text style={styles.or}>OR</Text>
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
              <Text
                style={{
                  fontFamily: "regular",
                  marginTop: 15,
                  alignSelf: "center",
                }}
              >
                {" "}
                Dont have an account?{" "}
                <Text style={{ color: "#3D56F0" }}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 30,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  signInButton: {
    marginTop: 30,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
  },
  bottomButton: {
    marginTop: 10,
    width: "100%",
    textAlign: "center",
  },
  btnContainer: {
    marginTop: 20,
    //paddingHorizontal: 30,
    width: "100%",
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "#3D56F0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  or: {
    fontFamily: "regular",
    color: "#9D9898",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
}));
