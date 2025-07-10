import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Title';

type Props = {
  navigation: any;
};

export default function NewPWD({ navigation }: Props) {
  return (
    <ImageBackground
        source={require('../../assets/image.png')}
        style={styles.background}
        resizeMode="cover"
    >
    <View style={styles.container}>
        <Title>Create new password</Title>
        <Text style={styles.Indice}>Your new password must be unique from those previously used.</Text>

        <Input placeholder="New password" secureTextEntry />
        <Input placeholder="Confirm password" secureTextEntry />

       <Button title="Reset password" backgroundColor="#fff" onPress={() => navigation.navigate('OK')} />

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
    Indice: {
    fontSize: 13,
    fontWeight: 'medium',
    fontFamily: 'MontserratAlternates_500Medium',
    color: 'white',
    marginBottom: 40,
    // textAlign: 'center',
  },
});
