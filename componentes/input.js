import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import Resultado from './resultado'

export default function input(props) {
  const [valor, setValor] = useState('')
  const mudarValor = text => {
    setValor(text)
  }
  if (valor.includes('.') || valor.includes(',') || valor.includes(' ')) {
    Alert.alert('Não utilize espaço ou pontuações. Exemplo: "." ou ","')
    setValor('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite o numero que sera convertido:</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#000',
          fontSize: 20,
          height: 35
        }}
        value={valor}
        onChangeText={mudarValor}
        keyboardType="decimal-pad"
      />
      <Resultado valor={valor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 45
  },

  text: {
    fontSize: 25
  },

  inputText: {
    width: 50,
    height: 50
  }
})
