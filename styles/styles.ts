import { StyleSheet, Touchable } from "react-native";
import FilePicker from "../components/FilePicker";

export const styles = StyleSheet.create({
  borderbox:{
    borderWidth:1,
    borderColor:"black",
  },
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
  fileBox: {
    maxHeight: 100, // 고정된 높이로 작은 창 구성
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
  },
  fileItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  uri: {
    marginLeft: 10,
    fontSize: 12,
    color: "gray",
  },
});

export const post = StyleSheet.create({
  container: {
    borderColor: "rgba(6, 93, 9, 0.45)",
    height:"85%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  touchable: {
    alignItems: "center",
    borderColor:'black',
    borderWidth:1,
    padding: 10,
    margin:5,
    backgroundColor: '#ccc' ,
  },
  text: {
    width: 69,
    height: 40,
    textAlign:"center",
    textAlignVertical: "center",
    marginHorizontal:2.5,
    marginTop:8,
    paddingHorizontal: 0,
    borderWidth:0,
  },
  textInput: {
    flex: 1, 
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10, 
    marginVertical: 8,
  },
  descriptionInput: {
    height: "740%",
    textAlignVertical: "top",
    marginBottom: 12.5,
  },
  filePicker:{
    borderColor:'black',
    borderWidth:1,
    padding: 10,
    margin:5,
    backgroundColor: '#ccc' ,
    alignItems:"center",
  },
  filePickerText:{
    borderColor:'black',
    borderWidth:4,
    textAlign:'center',
  },
});
