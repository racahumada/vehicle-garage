import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Divider } from 'components/Divider'
import { Details } from './Details'
import { Imagecar } from './ImageCar'

// import LogoLamb from '../../assets/image/logo.png'

const CardView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image src={require('../../assets/image/logo.png')} style={styles.imageLogo} /> */}
        <Image source={{uri:'https://logodownload.org/wp-content/uploads/2014/09/peugeot-logo-0-1.png'}} style={styles.imageLogo} />
      </View>
      <Divider />
      <Details />
      <Imagecar />
      <Divider />
    </View>
  )
}

export default CardView