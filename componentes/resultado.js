import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default function (props) {
  let sobra = props.valor
  let modulo = ''
  let fbin = []
  let resul = ''
  let i = ''

  const [rf, setRf] = useState(resul)
  const calc = () => {
    do {
      modulo = sobra % 2
      sobra = Math.floor(sobra / 2)
      fbin.push(modulo)
    } while (sobra > 0)
    for (i = fbin.length; i > 0; i--) {
      resul = resul + fbin[fbin.length - 1]
      fbin.pop()
    }
    return resul
  }
  calc()

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => {
          setRf(resul)
        }}
      >
        <Text style={styles.text}>Converter!!!</Text>
      </TouchableHighlight>
      <Text style={styles.resultado}>Resultado: {rf}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 35
  },
  buttons: {
    backgroundColor: '#F5F54E',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1
  },
  text: {
    color: '#000',
    fontSize: 20
  },

  resultado: {
    fontSize: 25,
    marginTop: 50
  }
})
