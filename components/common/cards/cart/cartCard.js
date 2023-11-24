import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './cartCard.style'
import { FONT, icons } from '../../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../../../redux/cartSlice'

const CartCard = ({product}) => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const deleteCart = (product) => {
    dispatch(deleteFromCart(product))
  }

  const addCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(product.images[0]) ? product.images[0] : 'https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png'}}
          resizeMode="contain"
          style={styles.logoImage}
        >
        </Image>
        <View style={{width: "33%"}}>
          <Text style={{fontFamily: FONT.bold}}>{product.title}</Text>
          <Text style={{fontFamily: FONT.medium}}>₹{product.price}</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 50}}>
          <Button onPress={() => deleteCart(product)} title="-" style={{fontFamily: FONT.bold}}></Button>
          <Text style={{fontFamily: FONT.bold, margin: 10}}>{product.quantity}</Text>
          <Button onPress={() => addCart(product)} style={{fontFamily: FONT.bold, marginLeft:10}} title="+"></Button>
        </View >
      </View>
    </View>
  )
}

export default CartCard