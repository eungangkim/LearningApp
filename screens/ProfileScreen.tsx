import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { styles } from "../styles/styles";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  route: ProfileScreenRouteProp;
};

const ProfileScreen = ({ route }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>{route.params.id}번</Text>
      <Text>This is {route.params.ProfName}'s profile</Text>
      <Button
        title="More Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default ProfileScreen;
