/*
작성 화면

문제점 {
  - 파일을 선택후 게시물을 오


}
실제 클라우드 서버에 데이터 업로드흐름{

  📤 파일 업로드 흐름
  1.사용자가 DocumentPicker 같은 걸로 파일 선택

  2.선택된 파일의 uri, name, type 등을 가져옴

  3.FormData로 서버에 전송:

  ts
  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    name: file.name,
    type: file.type,
  });
  await axios.post('https://your-server.com/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  4.서버는 파일을 클라우드 스토리지(S3, Firebase, etc.)에 저장하고,

  5.📎 업로드 완료된 파일의 공개 URL을 응답으로 보내줌

  json
  {
    "url": "https://cdn.your-server.com/files/abc123.pdf"
  }
}
*/
import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { styles, post } from "../styles/styles";
import ImagePicker from "../components/ImagePicker";
import FilePicker from "../components/FilePicker";
import { list, profile } from "../utils/data";
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  route: ProfileScreenRouteProp;
};

const PostScreen = () => {
  const [ClassName, onChangeClassName] = React.useState("");
  const [ProfName, onChangeProfName] = React.useState("");
  const [Id, onChangeId] = React.useState("");
  const [Description, onChangeDescription] = React.useState("");
  const [Files, setFile] = React.useState<{ name: string; uri: string }[]>([]);
  return (
    <View>
      <View style={[styles.container, post.container]}>
        <View style={post.itemContainer}>
          <Text style={post.text}>과목 :</Text>
          <TextInput
            onChangeText={onChangeClassName}
            value={ClassName}
            placeholder="예시 : 자료구조"
            style={post.textInput}
          />
        </View>
        <View style={post.itemContainer}>
          <Text style={post.text}>교수 :</Text>
          <TextInput
            onChangeText={onChangeProfName}
            value={ProfName}
            placeholder="예시 : 조행래"
            style={post.textInput}
          />
        </View>

        <View style={post.itemContainer}>
          <Text style={post.text}>과목 번호:</Text>
          <TextInput
            onChangeText={onChangeId}
            value={Id}
            placeholder="예시 : 1234"
            keyboardType="numeric"
            style={post.textInput}
          />
        </View>

        <View style={post.itemContainer}>
          <Text style={post.text}>내용 :</Text>
          <TextInput
            onChangeText={onChangeDescription}
            value={Description}
            placeholder="여기에 글을 작성하세요"
            style={[post.textInput,post.descriptionInput]}
            multiline
          />
        </View>
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
            files: Files,
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
  const newItem = profile(
    data.id,
    data.className,
    data.profName,
    data.description,
    data.files
  );
  list.push(newItem);

  console.log("저장됨:", newItem);
}

export default PostScreen;
