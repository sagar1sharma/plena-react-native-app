import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {COLORS, icons, SIZES} from '../../../constants'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

const Welcome = () => {
  const router = useRouter();

  return (
    <Provider store={store}>
    <View style={{backgroundColor: COLORS.main}}>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hey, Sagar</Text>
        <TouchableOpacity onPress={() => router.push('/cart/cartProvider')}>
          <Image style={styles.cart} source={icons.cart} />
        </TouchableOpacity>
        
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          
          <TextInput 
            style={styles.searchInput}
            placeholder='Search Products or store'
            placeholderTextColor="#889185"
          />
        </View>

        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:20}}>
        <View>
          <Text>DELIVERY TO</Text>
          <Text>Greenway, 3000 </Text>
        </View>
        <View>
          <Text>Within</Text>
          <Text>1 Hour</Text>
        </View>
      </View>
    </View>
    </Provider>
  )
}

export default Welcome