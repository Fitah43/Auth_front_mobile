import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import OTPInput from "../components/OTPInput";
import Retour from '../components/Retour';

type Props = {
    navigation: any;
};


export default function OTP({ navigation }: Props) {
    return(
           <ImageBackground
               source={require('../../assets/image.png')}
               style={styles.background}
               resizeMode="cover"
           >
            <View style={styles.container}>
                <Retour/>
                <Title>OTP verfication</Title>
                <Text style={styles.Indice}>Enter the verification code we just sent on your email address.</Text>
                <OTPInput/>
                <Button title="Verify" backgroundColor="#fff" onPress={() => navigation.navigate('NewPWD')}></Button>
                <View style={styles.ResendContainer}>
                <Text style={styles.ResendText}>Didn't receive code? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                    <Text style={styles.Resend}>Resend</Text>
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
    ResendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    bottom: -170,
  },
  ResendText: {
    color: '#333',
    fontFamily: 'MontserratAlternates_500Medium',
  },
  Resend: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_700Bold',
  },
})
