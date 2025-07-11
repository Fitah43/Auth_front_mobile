import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';
import Retour from '../components/Retour';

type Props = {
  navigation: any;
};

export default function OK({ navigation }: Props) {
  return (
    <ImageBackground
      source={require('../../assets/image.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Retour/>
        <Image
            source={require('../../assets/Successmark.png')}
            style={styles.image}
            resizeMode="contain"
        />
        <Title>Password Changed!</Title>
        <Text style={styles.indice}>Your password has been changed successfully.</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Back to login" backgroundColor="#fff" onPress={() => navigation.navigate('Login')} />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  indice: {
    fontSize: 13,
    fontWeight: 'medium',
    fontFamily: 'MontserratAlternates_500Medium',
    color: 'white',
    marginBottom: 40,
  }

});
