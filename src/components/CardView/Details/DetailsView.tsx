import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const DetailsView = () => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.carBrand}>Pegeout</Text>
      <Text style={styles.carName}>208</Text>
    </View>
  )
}

export default DetailsView