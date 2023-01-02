// import { StatusBar } from 'expo-status-bar';
// import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import * as Font from 'expo-font';
// import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { AppLoading } from 'expo'; 

const getFonts = () => Font.loadAsync({
    'reviewFont-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'reviewFont-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState("false");

  if(fontsLoaded){
    return (
      <Home />
    )
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
