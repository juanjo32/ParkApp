import React, {useRef, useState} from 'react';
import { Text, View, TextLink, CheckBox, StyleSheet, Linking} from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
});
export default function Login({ navigation }) {
  const password = useRef(null);
  const [isSelected, setSelection] = useState(false);
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: values =>
      alert(`Email: ${values.email}, Password: ${values.password}`)
  });
    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1E2D3E',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'

      }}
    >
      <Text style={{ color: '#fff', fontSize: 70, marginBottom: 35, fontWeight: 'bold' }}>
        ParkApp
      </Text>
      <View style={{ paddingHorizontal: 35, marginBottom: 25, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>
      <View style={{ paddingHorizontal: 35, marginBottom: 16, width: '100%' }}>
        <TextInput
          ref={password}
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#fff', false: '#fff' }}
        />
          <Text style={styles.label}>Acepto los terminos y condiciones</Text>

      <Button label='Ingresar' onPress={handleSubmit}/>
      <Button label='Registrarse'  onPress= {() => navigation.navigate('IngresoParqueadero') }/>

      <View>
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 0 }}> Wow  <Text style={{color: '#5CE1E6'}}
            onPress={() => navigation.navigate('SingUp') }>
              Click Here
         </Text>
        </Text>
      </View>
    </View>
    
  );
  //{handleSubmit}
  //Linking.openURL('https://www.instagram.com/')
}
const styles = StyleSheet.create({
checkbox: {
  alignSelf: "center",
  marginRight: 283,
  margin: 20,
  borderColor: '#fff',
  marginBottom: -25
},
checkboxContainer: {
  flexDirection: "row",
  marginBottom: 10,
  marginTop: 70,
  color: '#fff',
  marginLeft:80,
  borderColor: '#fff'
},

}
);



/*import React, {useRef, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';



const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
});
export default function Login(props) {
  const password = useRef(null);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: values =>
      alert(`Email: ${values.email}, Password: ${values.password}`)
  });
    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1E2D3E',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'

      }}
    >
      <Text style={{ color: '#fff', fontSize: 70, marginBottom: 35, fontWeight: 'bold' }}>
        ParkApp
      </Text>
      <View style={{ paddingHorizontal: 35, marginBottom: 25, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>
      <View style={{ paddingHorizontal: 35, marginBottom: 16, width: '100%' }}>
        <TextInput
          ref={password}
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Button label='Ingresar' onPress={handleSubmit}/>
      <Button label='Registrarse' onPress={handleSubmit}/>
      <View>
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 0 }}>
        Olvidaste tu
        </Text>
      </View>
    </View>
    
  );
}*/
