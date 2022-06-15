import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const SignInUpBtn = ({
  buttonTitle,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <View style={styles.circle}>
          <Image source={require('../assets/images/right_arrow.png')} style={{width: 13, height: 13}}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SignInUpBtn;

const styles = StyleSheet.create({
  buttonContainer: {
    //marginTop: 10,
    width: '100%',
    height: 58,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "#3D56F0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    //marginLeft: 5,
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    //fontWeight: 'bold',
    fontFamily: 'regular',
  },
});