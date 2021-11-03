import React, {forwardRef} from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';


const TextInput = forwardRef(({ icon, error, touched, ...otherProps }, ref) => {
  const validationColor = !touched ? '#fff' : error ? 'red' : '#55C610';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        color: '#fff'

      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='#fff'
          color= '#fff'
          ref={ref}
          {...otherProps}
        />
      </View>
    </View>
  );
});

export default TextInput;