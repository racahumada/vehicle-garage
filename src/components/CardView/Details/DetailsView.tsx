import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface DetailsProps {
  carName: string
}

const DetailsView = ({carName = ''} : DetailsProps) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carName}</Text>
    </View>
  )
}

export default DetailsView