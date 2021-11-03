import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: 235,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55C610',
        margin: 14
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

