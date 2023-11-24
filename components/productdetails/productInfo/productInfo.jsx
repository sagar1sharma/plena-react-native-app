import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "./productInfo.style";
import { COLORS, icons } from "../../../constants";
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
        <Text style={styles.productName}>{data.brand} </Text>
      </View>

      <TouchableOpacity style={styles.favourite} onPress={() => {addWishlist(data)}}>
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
        <SliderBox sliderBoxHeight={300} ImageComponentStyle={{height: '100%', width: '100%'}} images={data.images?data.images:sampledata}/>
      </View>
      
      <View style={{flexDirection: "row", justifyContent: "left", marginTop:10}}>
        <Text style={styles.price}>Rs. {data.price}</Text>
        <View style={styles.discountPercentage}><Text style={styles.discountPercentageText}>{data.discountPercentage} % OFF</Text></View>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 50}}>
        <Button title="Add to Cart" color="#6CA6CD"  onPress={() => addCart(data)}>
        </Button>
        <Button title="Buy Now" color="#6CA6CD">
        </Button>

      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.detailsTitle}>Details</Text>
        <Text style={styles.detailsText}>{data.description}</Text>
      </View>
      
    </View>
  );
};

export default Product;