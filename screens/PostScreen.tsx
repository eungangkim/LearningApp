import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { styles,post } from "../styles/styles";
import ImagePicker from "../components/ImagePicker";
import FilePicker from "../components/FilePicker";
import {list, profile} from "../utils/data";
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  route: ProfileScreenRouteProp;
};


const PostScreen = () => {
  const [ClassName, onChangeClassName] = React.useState('');
  const [ProfName, onChangeProfName] = React.useState('');
  const [Id, onChangeId] = React.useState('');
  const [Description, onChangeDescription] = React.useState('');
  const [Files, setFile] = React.useState<{ name: string; uri: string }[]>([]);
  return (
    <View>
      <View style={styles.container}>
        <Text>
          과목 :{' '}
          <TextInput
            onChangeText={onChangeClassName}
            value={ClassName}
            placeholder="예시 : 자료구조"
          />
        </Text>
        <Text>
          교수 :{' '}
          <TextInput
            onChangeText={onChangeProfName}
            value={ProfName}
            placeholder="예시 : 조행래"
          />
        </Text>
        <Text>
          과목 번호:{' '}
          <TextInput
            onChangeText={onChangeId}
            value={Id}
            placeholder="예시 : 1234"
            keyboardType="numeric"
          />
        </Text>
        <Text>
          내용 :{' '}
          <TextInput
            onChangeText={onChangeDescription}
            value={Description}
            placeholder="여기에 글을 작성하세요"
          />
        </Text>
      </View>
      <View>
        <ImagePicker />
        <FilePicker
          onFilePicked={(file) => {
            setFile((prev) => [...prev, file]); // ✅ 파일 추가
          }}
        /> 
        
      </View>
      <TouchableOpacity
        style={post.touchable}
        onPress={() =>
          SaveData({
            id: parseInt(Id),
            className: ClassName,
            profName: ProfName,
            description: Description,
            files:Files,
          })
        }
      >
        <Text>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

// ✅ 타입 정의 및 list에 추가
function SaveData(data: {
  id: number;
  className: string;
  profName: string;
  description: string;
  files: { name: string; uri: string }[];
}) {
  const newItem = profile(data.id, data.className, data.profName,data.description,data.files);
  list.push(newItem);

  console.log('저장됨:', newItem);
}

export default PostScreen;
