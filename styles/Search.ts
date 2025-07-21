import { StyleSheet } from "react-native";

export const Search = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    margin: 3,
  },
  searchBar: {
    flexDirection: "row",
    flex: 0.08,
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
    width: 340,
  },
  TouchableOpacity: {
    flex: 1,
  },
  searchImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  list:{
    flex:1
  }
});
