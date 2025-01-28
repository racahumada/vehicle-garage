import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Divider } from 'components/Divider'
import { Details } from './Details'
import { Imagecar } from './ImageCar'
import { ButtonBuy } from 'components/ButtonBuy'
import { PriceControls } from './PriceControls'
import { CarModel } from './PriceControls/props'
import { loadCarData } from './PriceControls/actions'

// import LogoLamb from '../../assets/image/logo.png'

const CardView = () => {

  const [carData, setCardData] = useState<CarModel | null>(null)

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCardData)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri:'https://logospng.org/download/lamborghini/logo-lamborghini-1024.png'}} style={styles.imageLogo} />
      </View>
      <Divider />
      <Details carName={carData?.carName}/>
      <Imagecar id={carData?.id}/>
      <Divider />
      <ButtonBuy />
      <PriceControls price={carData?.price} carData={carData} setCarData={setCardData} />
    </View>
  )
}

export default CardView