import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: "auto",
    backgroundColor: "#E7ECF0",
    borderRadius: SIZES.medium,
    alignItems: "left",
  },
  favourite: {
    marginTop: "13px",
    width: 16,
    height: 15,
  },
  logoContainer: {
    left: "25%",
    marginTop: 20,
    marginBottom: 106,
    width: 68,
    height: 68,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
