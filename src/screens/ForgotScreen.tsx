import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Retour from '../components/Retour';

type Props = {
    navigation: any;
};


export default function Forgot({ navigation }: Props) {
    return(
           <ImageBackground
               source={require('../../assets/image.png')}
               style={styles.background}
               resizeMode="cover"
           >
            <View style={styles.container}>
                <Retour/>
                <Title>Forgot password?</Title>
                <Text style={styles.Indice}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                <Input placeholder="Email" keyboardType="email-address" />
                <Button title="Send code" backgroundColor="#fff" onPress={() => navigation.navigate('OTP')}></Button>
                <View style={styles.LoginContainer}>
                <Text style={styles.LoginText}>Remember password? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.Login}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
           </ImageBackground> 
    )}
const styles = StyleSheet.create({
    background : {
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
    LoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    bottom: -170,
  },
  LoginText: {
    color: '#333',
    fontFamily: 'MontserratAlternates_500Medium',
  },
  Login: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_700Bold',
  },
})
