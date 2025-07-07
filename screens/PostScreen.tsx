import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { styles } from "../styles/styles";
import  ImagePicker from "../components/ImagePicker";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  route: ProfileScreenRouteProp;
};

const PostScreen = () => {
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          onChangeText={onChangeText1}
          value={text1}
          placeholder="여기에 글을 작성하세요"
        />
        <Text>내용 : {text1}</Text>
        <TextInput
          onChangeText={onChangeText2}
          value={text2}
          placeholder="여기에 글을 작성하세요"
        />
        <Text>내용 : {text2}</Text>
      </View>
      <View>
        <ImagePicker />
      </View>
    </View>
  );
};
export default PostScreen;
