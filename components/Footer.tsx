import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { footer } from "../styles/Footer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={footer.footer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={footer.container}
      >
        <Text>home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={footer.container}
      >
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Personal")}
        style={footer.container}
      >
        <Text>Personal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
