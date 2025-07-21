import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const PersonalScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>김명섭</Text>
      <Button title="프로필 편집" onPress={()=>{
        navigation.navigate("EditProfile");
      }}></Button>
    </View>
  );
};

export default PersonalScreen;
