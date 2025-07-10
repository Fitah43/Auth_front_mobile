import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { MontserratAlternates_700Bold,MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
  MontserratAlternates_700Bold,
  MontserratAlternates_500Medium
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <AppNavigator />;
}
