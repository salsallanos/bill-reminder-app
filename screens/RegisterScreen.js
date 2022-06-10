import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Text, Button, Input } from "@rneui/base";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { makeStyles } from '@rneui/themed';

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const styles = useStyles(props);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackTitle: "Back",
    });
  }, [props.navigation]);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={{ marginBottom: 50, fontSize: 28, fontFamily: 'regular' }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{fontFamily: 'regular'}}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{fontFamily: 'regular'}}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{fontFamily: 'regular'}}
        />
        <Input
          placeholder="Profile Picture URL (optional) "
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
          style={{fontFamily: 'regular'}}
        />
      </View>
      <Button
        title="Register"
        onPress={register}
        raised
        containerStyle={styles.button}
        titleStyle={{fontFamily: 'regular'}}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.background,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
}));
