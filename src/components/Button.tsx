import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
};

export default function Button({ title, onPress, backgroundColor}: Props) {
  const textColor = backgroundColor === '#494358' ? '#fff' : '#494358';

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 344,
    height: 58,
    paddingVertical: 15,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'MontserratAlternates_500Medium',
  },
});
