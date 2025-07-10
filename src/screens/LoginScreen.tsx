import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Title';
import Forgot from './ForgotScreen';

type Props = {
  navigation: any;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <ImageBackground
        source={require('../../assets/image.png')}
        style={styles.background}
        resizeMode="cover"
    >
    <View style={styles.container}>
        <Title>Welcome back!{"\n"}Glad to see you, Again!</Title>
        
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Mot de passe" secureTextEntry />

      <TouchableOpacity
        onPress={() => navigation.navigate('Forgot')}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button title="Login" backgroundColor="#fff" onPress={() => navigation.navigate(/*action*/)} />

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerNow}>Register Now</Text>
        </TouchableOpacity>
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
  forgot: {
    alignSelf: 'flex-end',
    color: '#fff',
    marginBottom: 30,
    alignItems: 'flex-end',
    fontFamily: 'MontserratAlternates_500Medium',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#333',
    fontFamily: 'MontserratAlternates_500Medium',
  },
  registerNow: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_700Bold',
  },
});
