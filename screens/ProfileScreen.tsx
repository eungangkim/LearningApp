import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { styles ,profile} from "../styles/styles";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  route: ProfileScreenRouteProp;
};

const ProfileScreen = ({ route }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={profile.text}>과목 : {route.params.ClassName}</Text>
      <Text style={profile.text}>교수 : {route.params.ProfName}</Text>
      <Text style={profile.text}>과목 번호 : {route.params.id}</Text>
      <Text style={profile.description}>{route.params.Description}</Text>
      <Button
        title="More Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default ProfileScreen;
