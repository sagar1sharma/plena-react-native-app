import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './cartCard.style'
import { icons } from '../../../../constants'
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
    <TouchableOpacity
      style={styles.container}
    >
      <TouchableOpacity>
        <Image
          source={icons.favourite}
          style={styles.favourite}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(product.images[0]) ? product.images[0] : 'https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png'}}
          resizeMode="contain"
          style={styles.logoImage}
        >
        </Image>
      <TouchableOpacity onPress={() => deleteCart(product)}><Text>-</Text></TouchableOpacity>
      <Text>{product.quantity}</Text>
      <TouchableOpacity onPress={() => addCart(product)}><Text>+</Text></TouchableOpacity>
      </TouchableOpacity >
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.jobName} numberOfLines={1}>{product.brand}</Text>
            <Text style={styles.jobType}>{product.category}</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.add} style={{height: 20, width: 20}}></Image>
          </TouchableOpacity>


        </View>
    </TouchableOpacity>
  )
}

export default CartCard