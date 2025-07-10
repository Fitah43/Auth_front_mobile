import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Input(props: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = props.secureTextEntry;

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor="#999"
        secureTextEntry={isPassword && !isPasswordVisible}
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Feather
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    width: 331,
    height: 56,
    backgroundColor: '#494358',
    borderRadius: 27.5,
    paddingHorizontal: 16,
    paddingRight: 44, 
    color: '#fff',
    fontSize: 16,
    fontFamily: 'MontserratAlternates_500Medium',
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
