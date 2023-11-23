import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <Image
          source={icons.home}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <TouchableOpacity >
        <Image
          source={icons.categories}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={icons.favourites}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={icons.more}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;