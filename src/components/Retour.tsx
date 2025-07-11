import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/Rectangle.png')}
        style={styles.rectangle}
      />
      <Image
        source={require('../../assets/Vector.png')}
        style={styles.vector}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40, 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    position: 'absolute',
    width: 44,
    height: 44,
  },
  vector: {
    position: 'absolute',
    width: 7,
    height: 14,
  },
});
