import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable,
TextInput, CheckBox,tintColors, TouchableOpacity } from 'react-native';
import IngresoParqueadero from './screens/IngresoParqueadero';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

//const Stack = createNativeStackNavigator();
//screens 
/*import Login from './screens/Login';

function LoginScreen() {
  return (
    <Login/>
  );
}
function SignUpScreen() {
  return (
    <SignUp/>
  );
}*/
export default function App() {
  console.log("Todo copas");
  return( 
      <Login/>
  );
}
