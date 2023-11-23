import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.lightWhite,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.search,
    marginRight: SIZES.medium,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: SIZES.xxLarge,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    color: "white",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium
  },
  searchBtn: {
    width: 18,
    height: 18,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
  },
  cart: {
    height: 18,
    width: 16
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    backgroundColor: COLORS.lightWhite
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    backgroundColor: COLORS.lightWhite
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
