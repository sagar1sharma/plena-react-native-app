import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'

import styles from './bannercard.style'

const BannerCard = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => {handleCardPress(item)}}
    >
      <Image 
        source={item}
      />
    </TouchableOpacity>
  )
}

export default BannerCard