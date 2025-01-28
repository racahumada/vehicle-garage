import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface ImageCarProps {
  id: number;
}

const ImageCarView = ({id} : ImageCarProps) => {
  return (
    <Image source={{ uri: `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${id}.png`}} style={styles.image} />
  )
}

export default ImageCarView