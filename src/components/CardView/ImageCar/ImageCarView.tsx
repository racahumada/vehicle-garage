import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ImageCarView = () => {
  return (
    <Image source={{ uri: 'https://quatrorodas.abril.com.br/wp-content/uploads/2024/12/Peugeot-208-manual-2025-1-e1733279674402.jpg?crop=1&resize=1212,909'}} style={styles.image} />
  )
}

export default ImageCarView