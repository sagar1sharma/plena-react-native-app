import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./productInfo.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";
import { SliderBox } from "react-native-image-slider-box";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../redux/wishlistSlice";
import { addToCart } from "../../../redux/cartSlice";
import { router } from "expo-router";

const Product = ({ data }) => {
  const sampledata = ['https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png', 'https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png', 'https://media.socio.events/small/a/1670338994-3146-placeholder_wit.png']
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist)
  const cartItems = useSelector((state) => state.cart)

  const addWishlist= (data) => {
    dispatch(addToWishlist(data))
  }

  const addCart = (data) => {
    dispatch(addToCart(data))
    router.push('/cart/cartProvider')
  }

  return (
    <View style={styles.container}>

      <View style={styles.productTitleBox}>
        <Text style={styles.productTitle}>{data.title}</Text>
      </View>

      <View style={styles.productInfoBox}>
        <Text style={styles.productName}>{data.title} </Text>
      </View>

      <TouchableOpacity onPress={() => {addWishlist(data)}}>
        {wishlistItems.find(item => item.id === data.id)?
        (<Image
          source={icons.heart}
          style={styles.favourite}
        />):
        (<Image
          source={icons.favourite}
          style={styles.favourite}
        />)}
      </TouchableOpacity>

      <View style={styles.logoBox}>
        <SliderBox images={data.images?data.images:sampledata}/>
      </View>
      
      <View style={{flexDirection: "row", justifyContent: "space-around"}}>
        <Text>{data.price}</Text>
        <Text>{data.discountPercentage}</Text>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 50}}>
        <TouchableOpacity onPress={() => addCart(data)}>
          <Text>
            Add to Cart
          </Text>
        </TouchableOpacity>
          <Text>
            Buy Now
          </Text>
        <TouchableOpacity>

        </TouchableOpacity>

      </View>

      
      <Text>Details</Text>
        <Text>{data.description}</Text>
    </View>
  );
};

export default Product;