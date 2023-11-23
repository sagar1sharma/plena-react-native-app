import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "left",
  },
  logoBox: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "100%",
    height: "500%",
  },
  productTitleBox: {
    marginTop: SIZES.small,
  },
  productTitle: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  productInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontSize: SIZES.large - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
