import { StyleSheet, Touchable } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 400,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 5,
  },
  Touchable: {
    width: "95%",
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

export const profile = StyleSheet.create({
  description: {
    width: "90%",
    margin: 20,
    padding: 20,
    borderWidth: 1,
  },
  text: {
    borderWidth: 0,
    marginLeft: 10,
  },
  detailButton: {
    backgroundColor: "red",
  },
});

export const post = StyleSheet.create({
  touchable: {
    backgroundColor: '#rgba(114, 133, 155, 0.49)',
    width:'30%',
    alignItems:'center',
  },
});
