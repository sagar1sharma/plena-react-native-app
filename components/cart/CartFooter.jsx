import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./cartFooter.style";
import { icons } from "../../constants";

const CartFooter = ({ totalAmount, shipping }) => {
  return (
    <View style={styles.container}>
      <Text>SubTotal: {totalAmount}</Text>
      <Text>Delivery: {shipping}</Text>
      <Text>Total: {totalAmount + shipping}</Text>
    </View>
  );
};

export default CartFooter;