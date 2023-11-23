import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './banner.style'
import { useRouter } from 'expo-router'
import {COLORS, SIZES} from '../../../constants'
import BannerCard from '../../common/cards/banner/BannerCard'
import useFetch from '../../../hook/useFetch'
import banner from '../../../assets/icons/banner1.png'

const Banner = () => {
    const router = useRouter();
    const { error, isLoading} = useFetch('search', {query: 'React Developer', num_pages: 1})
    data = banner


  return (
    <View style={styles.container}>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors />)
          : <FlatList 
              data={data}
              renderItem={({item}) => (
                <BannerCard 
                  item={item}
                />
              )}
              keyExtractor={item => item?.id}
              contentContainerStyle={{columnGap: SIZES.medium }}
              horizontal
            />
        }
      </View>
    </View>
  )
}

export default Banner