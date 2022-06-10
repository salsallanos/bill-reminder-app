import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import React from 'react';

const HomeScreen = (props) => {
  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        props.navigation.replace('Login');
    })
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={signOutUser}>
          <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})