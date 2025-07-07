import { StyleSheet, Touchable } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width:400,
    borderWidth: 0,
    borderColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Touchable: {
    width: '95%',
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    margin: 10,
    alignItems: "flex-start",
  },
  buttonText: {
    padding: 10,
  },
  buttonDetailText: {
    position: "absolute",
    left: "80%",
    top: "60%",
  },
  PlusButton: {
    width: 50,
    height: 50,
  },
});
