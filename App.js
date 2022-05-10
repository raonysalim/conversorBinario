import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Input from './componentes/input'

export default function App() {
  let [fontsLoaded, error] = useFonts({
    AmaticSC_400Regular,
    AmaticSC_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Conversor!</Text>
        <Input />
      </View>
      <View>
        <Text></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  },
  title: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25
  },

  text: {
    fontSize: 85,
    fontFamily: 'AmaticSC_700Bold'
  }
})
