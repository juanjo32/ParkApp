import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable,
TextInput, Picker } from 'react-native';


export default function IngresoParqueadero(props, { navigation }) {
    
    console.log("Todo copas");
    const{otitle= 'Ingresar al parqueadero'} = props;
    const [text, onChangeText] = React.useState("Ingrese su placa");
    const [selectedValue, setSelectedValue] = React.useState("Seleccione su parqueadero");
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ParkApp</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
        />
        <Picker 
          selectedValue={selectedValue}
          style={{ height: 110, width: 350, marginLeft: 20,marginRight:50, color: 'white', borderColor:'#55C610', margin:18 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Parqueadero Divino niño Bello" value="Divino niño Bello" />
          <Picker.Item label="Parqueadero Universidad EIA Palmas" value="EIA Palmas" />
          <Picker.Item label="Parqueadero El Refugio Caldas" value="El Refugio Caldas" />
          <Picker.Item label="Parqueadero el aguacero Santuario" value="El aguacero Santuario" />
        </Picker> 
        
        <Pressable style={styles.registrarse}>
        <Text style={styles.text}>{otitle}</Text>
        </Pressable>
        
       </View>
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E2D3E',
      
      
    },
    label: {
      margin: 0,
      color: '#fff',
      marginTop: -46,
      marginLeft: 56
    },
    registrarse:{
      alignItems: 'center',     
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,      
      backgroundColor: '#55C610',
      top: 73,
      marginLeft: 40,
      marginRight: 40,
      
    },
    input:{
      marginTop: 45,
      height: 40,
      margin: 1,
      borderWidth: 0.5,
      borderColor: '#55C610',
      padding: 10,
      color: '#fff',
      backgroundColor: '#1E2D3E',
      borderRadius:3,
      marginLeft: 20,
      marginRight: 20
      
    },
    title:{
      marginTop:151,
      textAlign: 'center',
      fontSize: 70,
      fontWeight: 'bold',
      color: '#fff',
    }
}
);
