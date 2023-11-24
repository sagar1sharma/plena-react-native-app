import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#E7ECF0",
    borderRadius: SIZES.medium,
  },
  logoContainer: {
    flexDirection: "row",
    height: 50,
    marginTop: 10,
    borderRadius: SIZES.medium,
    alignItems: "center",
  },
  logoImage: {
    width: "33%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: SIZES.medium,
  },
});

export default styles;
