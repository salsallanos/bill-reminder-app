import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Button, Input } from "@rneui/base";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { makeStyles, useTheme, Switch  } from "@rneui/themed";
import Toggle from '../components/Toggle';

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
    setChecked((previousValue) => !previousValue)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{alignItems: "center"}}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/e.png')}
            style={{ width: 56, height: 59 }}
          />
          <Text style={{ fontFamily: 'regular', fontSize: 35}}>
            EventHub
          </Text>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={{ fontFamily: 'regular', fontSize: 24, alignSelf: "flex-start"}}>
            Sign In
          </Text>

          <Input
            placeholder="abc@email.com"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#747688"
            style={{fontFamily: 'light', fontSize: 14}}
            leftIcon={
              <Image
                source={require('../assets/images/email.png')}
                style={{ width: 25, height: 25 }}
              />
            }
            leftIconContainerStyle={{ marginLeft: 15, marginRight: 10}}
            inputContainerStyle= {{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#E4DFDF',
              height: 56,
              marginTop: 20,
              marginHorizontal: -10
            }}
          />
          <Input
            placeholder="Your password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#747688"
            style={{fontFamily: 'light', fontSize: 14}}
            leftIcon={
              <Image
                source={require('../assets/images/password.png')}
                style={{ width: 22, height: 26 }}
              />
            }
            leftIconContainerStyle={{ marginLeft: 15, marginRight: 10, paddingTop: 0}}
            inputContainerStyle= {{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#E4DFDF',
              height: 56,
              marginTop: 0,
              marginHorizontal: -10
            }}
          />

          <View style={styles.links}>
            <View style={{ flexDirection: "row" }}>
              <Toggle label="Remember me" onColor="#5669FF" isOn={checked} onToggle={onToggle} labelStyle={{ fontFamily: 'regular'}}/>
            </View>
            <Text style={{ fontFamily: 'regular', marginTop: 5, marginRight: -15}}> Forgot Password?</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button 
              color="#5669FF"
              title="SIGN IN"
              containerStyle={styles.signInButton}
              titleStyle={{fontFamily: 'regular', fontSize: 16}}
            />
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
  logoContainer:{
    marginTop: 40,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 30,
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 30
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  signInButton: {
    marginTop: 30,
    width: '100%',
    borderRadius: 10
  },
  btnContainer: {
    paddingHorizontal: 30,
    width:'100%'
  }
}));
