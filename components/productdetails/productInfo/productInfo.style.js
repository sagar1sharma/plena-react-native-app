import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "left",
  },
  favourite: {
    marginTop: "13px",
    width: 34,
    height: 30,
  },
  logoBox: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
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
  price: {
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    marginRight: 50,
    marginTop: 5
  },
  discountPercentage: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    fontFamily: FONT.regular
  },
  discountPercentageText: {
    color: COLORS.lightWhite, 
    padding: 5
  },
  detailsTitle:{
    fontFamily: FONT.bold
  },
  detailsText:{
    marginTop: 10,
    fontFamily: FONT.regular,
    color: COLORS.gray
  }
});

export default styles;
