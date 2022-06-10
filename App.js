import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { db, app } from "./firebaseConfig";
import { ThemeProvider, createTheme } from "@rneui/themed";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { AppNavigation } from "./navigation/AppNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const loadAssetsAsync = async () => {
    const fontAssets = cacheFonts([
      { 'regular': require('./assets/fonts/Montserrat-Regular.ttf') },
      { 'light': require('./assets/fonts/Montserrat-Light.ttf') },
      { 'bold': require('./assets/fonts/Montserrat-Bold.ttf') },
    ]);
    await Promise.all([...fontAssets]);
  };

  if (!isReady) {
    return (
      <SafeAreaProvider>
        <AppLoading
          startAsync={loadAssetsAsync}
          onFinish={() => {
            setIsReady(true);
          }}
          onError={(error) => console.log(error)}
        />
      </SafeAreaProvider>
    );
  }
  
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
}

const theme = createTheme({
  mode: 'light'
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
