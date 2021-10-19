import React from 'react';

import { StatusBar } from 'react-native';

import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Background } from './src/components/Background/index';
import { AuthProvider } from './src/hooks/Auth';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Inter_400Regular,
    Rajdhani_700Bold,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
