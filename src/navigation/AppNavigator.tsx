import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Forgot from '../screens/ForgotScreen';
import OTP from '../screens/OTPScreen';
import NewPWD from '../screens/NewPWDScreen';
import OK from '../screens/OKScreen';

import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="NewPWD" component={NewPWD} />
        <Stack.Screen name="OK" component={OK} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
