import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './productscard.style'
import { icons } from '../../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../redux/cartSlice'
import { addToWishlist } from '../../../../redux/wishlistSlice'

const ProductCard = ({product, handleNavigate}) => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const wishlistItems = useSelector((state) => state.wishlist)

  const addWishlist= (product) => {
    dispatch(addToWishlist(product))
  }

    // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product))
  }


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity onPress={() => {addWishlist(product)}}>
        {wishlistItems.find(item => item.id === product.id)?
        (<Image
          source={icons.heart}
          style={styles.favourite}
        />):
        (<Image
          source={icons.favourite}
          style={styles.favourite}
        />)}
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(product.images[0]) ? product.images[0] : 'https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png'}}
          resizeMode="contain"
          style={styles.logoImage}
        >
        </Image>
        
        {product.quantity && <Text>{product.quantity}</Text>}
      </TouchableOpacity >
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.jobName} numberOfLines={1}>Rs. {product.price}</Text>
            <Text style={styles.jobType}>{product.title}</Text>
          </View>
          <TouchableOpacity onPress={() => addCart(product)}>
            <Image source={icons.add} style={{height: 20, width: 20}}></Image>
          </TouchableOpacity>


        </View>
    </TouchableOpacity>
  )
}

export default ProductCard