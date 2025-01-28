import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

const ButtonBuyView = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name='shoppingcart'size={24} color='white' />
        <Text style={styles.text}>Comprar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBuyView