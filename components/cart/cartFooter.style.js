import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    // alignItems: "center",
  },
  textBox: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  text:{
    fontFamily: FONT.medium,
    padding: 5
  }
});

export default styles;
