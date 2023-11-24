import { View, Text, TouchableOpacity, Image, Linking, Button } from "react-native";

import styles from "./cartFooter.style";
import { icons } from "../../constants";

const CartFooter = ({ totalAmount, shipping }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Subtotal: </Text>
        <Text styles={styles.text}>₹{totalAmount}</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.text}>Delivery: </Text>
        <Text styles={styles.text}>₹{shipping}</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.text}>Total: </Text>
        <Text styles={styles.text}>₹{totalAmount+ shipping}</Text>
      </View>
      <Button title="Proceed to Checkout"></Button>
    </View>
  );
};

export default CartFooter;