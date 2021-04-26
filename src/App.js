import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from './assets'
import Router from './router'
// import {SplashScreen, SignIn} from './pages'


const App = () => {
  return (
    <NavigationContainer>
        <Router />
    </NavigationContainer>
  )
}

export default App

