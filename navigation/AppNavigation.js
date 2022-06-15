import React from "react";
import { Image, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "transparent",
  },
  headerLeft: () => {
    return (
      <Image source={require("../assets/images/back.png")} style={styles.back} />
    )
  },
  headerShadowVisible:false,
  headerTintColor: "#000",
  headerTitleAlign: "center",
  headerBackTitle: "",
  headerTitle: ""
};

export const AppNavigation = () => {
  const { updateTheme, theme } = useTheme();
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme?.colors.background,
          primary: "",
          card: "",
          text: "",
          border: "",
          notification: "",
        },
        dark: theme.mode === "dark",
      }}
    >
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: Platform.OS == "android" ? 10 : 8,
  }
});
