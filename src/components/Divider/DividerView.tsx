import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const DividerView = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
    </View>
  )
}

export default DividerView