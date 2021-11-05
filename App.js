import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable,
TextInput, CheckBox,tintColors, TouchableOpacity } from 'react-native';
//import Navigation from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SingUp from './screens/SignUp';
import IngresoParqueadero from './screens/IngresoParqueadero';

//import IngresoParqueadero from './screens/IngresoParqueadero';
//import Login from './screens/Login';
//import SignUp from './screens/SignUp';

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


const Stack = createNativeStackNavigator();

export default function App() {
  console.log("Todo copas");
  return( 
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ParkApp" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="IngresoParqueadero" component={IngresoParqueadero} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
