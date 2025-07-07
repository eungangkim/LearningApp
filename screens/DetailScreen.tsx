import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

const DetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailScreen;
