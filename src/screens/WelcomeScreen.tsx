import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';

type Props = {
  navigation: any;
};

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <ImageBackground
      source={require('../../assets/image.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Title>Scan it, know it, eat better</Title>
        <View style={styles.buttonsContainer}>
          <Button title="Login" backgroundColor="#494358" onPress={() => navigation.navigate('Login')} />
          <Button title="Register" backgroundColor="#fff" onPress={() => navigation.navigate('Register')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },

});
