import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Retour from '../components/Retour';

type Props = {
    navigation: any;
};

export default function Register({ navigation }: Props) {
    return(
    <ImageBackground
        source={require('../../assets/image.png')}
        style={styles.background}
        resizeMode="cover"
    >
        <View style={styles.container}>
            <Retour/>
            <Title>Hello! Register to get started</Title>
            <Input placeholder="username" />
            <Input placeholder="Email" keyboardType="email-address" />
            <Input placeholder="password" secureTextEntry/>
            <Input placeholder="confirm password" secureTextEntry/>
            <Button title="Register" backgroundColor="#fff" onPress={() => navigation.navigate(/* action */)}></Button>
            <View style={styles.LoginContainer}>
            <Text style={styles.LoginText}>Already have an account </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.LoginNow}>Login now</Text>
            </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
    )
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
    LoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    bottom: -100,
  },
  LoginText: {
    color: '#333',
    fontFamily: 'MontserratAlternates_500Medium',
  },
  LoginNow: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_700Bold',
  },
})