import React, { useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

export default function OTPInput() {
  const inputs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handleChange = (text: string, index: number) => {
    if (text.length === 1 && index < 3) {
      inputs[index + 1].current?.focus();
    }
  };

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {inputs.map((ref, index) => (
        <TextInput
          key={index}
          ref={ref}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleBackspace(e, index)}
          placeholder="-"
          placeholderTextColor="#aaa"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 1,
    marginHorizontal: 30,
  },
  input: {
    width: 70,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#494358',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'MontserratAlternates_500Medium',
    marginBottom: 20,
  },
});
