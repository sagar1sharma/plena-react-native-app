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

  
  const addCart = (product) => {
    dispatch(addToCart(product))
  }


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.favourite} onPress={() => {addWishlist(product)}}>
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
      <View style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(product.images[0]) ? product.images[0] : 'https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png'}}
          resizeMode="contain"
          style={styles.logoImage}
        >
        </Image>
        
        {product.quantity && <Text>{product.quantity}</Text>}
      </View >
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.productName} numberOfLines={1}>Rs. {product.price}</Text>
            <Text style={styles.productType}>{product.title}</Text>
          </View>
          <TouchableOpacity onPress={() => addCart(product)}>
            <Image source={icons.add} style={{height: 23, width: 23, marginLeft: 5}}></Image>
          </TouchableOpacity>

        </View>
    </TouchableOpacity>
  )
}

export default ProductCard