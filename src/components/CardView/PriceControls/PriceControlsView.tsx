import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { handleNextItem, handlePreviousItem } from './actions'
import { CarModel } from './props';

interface PriceControlsProps {
  price: string | undefined;
  carData: CarModel | null;
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>;
}

const PriceControlsView = ({price = '', carData, setCarData} : PriceControlsProps) => {
  return (
    <View style={styles.container}>
      <Button title='<' color='#01A6b3' onPress={() => handlePreviousItem(carData, setCarData)} />
      <Text style={styles.priceLabel}>{price}</Text>
      <Button title='>' color='#01A6b3' onPress={() => handleNextItem(carData, setCarData)} />
    </View>
  )
}

export default PriceControlsView