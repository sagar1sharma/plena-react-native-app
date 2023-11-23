import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'
import { Text } from 'react-native'
import { BannerCard, ScreenHeaderBtn } from '../../components'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { deleteFromCart } from '../../redux/cartSlice'
import CartCard from '../../components/common/cards/cart/cartCard'
import CartFooter from '../../components/cart/CartFooter'

const cart = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price * cartItem.quantity)
    })
    setTotalAmount(temp);
  }, [cartItems])

  let shipping = parseInt(100);
  const grandTotal = shipping + totalAmount

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
              style={{marginRight: 50}}
            />
          ),
          headerTitle: `Shopping Cart`,
        }}
      />

    <View>
      <TouchableOpacity>
        {cartItems?.map((product) => (
            <CartCard
              product={product}
              key={`${product?.id}`}
              quantity={product.quantity}
            />
            )

          )
        }
        </TouchableOpacity>
    </View>

    <CartFooter totalAmount={totalAmount} shipping={shipping} grandTotal={grandTotal}/>

    </SafeAreaView>
  )
}

export default cart