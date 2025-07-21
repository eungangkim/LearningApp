/*
게시글 화면
*/
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { styles, profile } from "../styles/styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FileViewer from "react-native-file-viewer";
import FilePreviewScreen from "./FilePreviewScreen";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  route: ProfileScreenRouteProp;
};

const ProfileScreen = ({ route }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { ClassName, ProfName, id, Description, files = [] } = route.params;
  const [showFiles, setShowFiles] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={profile.text}>과목 : {ClassName}</Text>
      <Text style={profile.text}>교수 : {ProfName}</Text>
      <Text style={profile.text}>과목 번호 : {id}</Text>
      <TouchableOpacity onPress={() => setShowFiles(!showFiles)}>
        <Text style={[profile.text, { marginTop: 20, color: "blue" }]}>
          📂 첨부 파일 목록 {showFiles ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>
      {showFiles && (
        <View style={profile.fileBox}>
          <ScrollView>
            {files.map((file, index) => (
              /*파일 뷰어 방식 *작동위해 환경 설정 필요* */
              <View key={index} style={profile.fileItem}>
                {getFileIcon(file.name)}
                <TouchableOpacity
                  onPress={() => {
                    FileViewer.open(file.uri)
                      .then(() => console.log("열림"))
                      .catch((err) => console.log("오류입니다:", err));
                  }}
                >
                  <Text
                    style={[
                      profile.text,
                      { color: "blue", textDecorationLine: "underline" },
                    ]}
                  >
                    • {file.name + "  파일 뷰어"}
                  </Text>
                </TouchableOpacity>
                {/*Linking 방식*/}
                <TouchableOpacity
                
                  onPress={() => Linking.openURL(file.uri)}
                /*
                  onPress={() => navigation.navigate("FilePreview", { file })}
                    */
                  >
                  <Text
                    style={[
                      profile.text,
                      { color: "blue", textDecorationLine: "underline" },
                    ]}
                  >
                    • {file.name + "  링킹"}
                  </Text>
                </TouchableOpacity>
                <Text style={profile.uri}>{file.uri}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      <Text style={profile.description}>{Description}</Text>

      <Button
        title="More Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

const getFileIcon = (filename: string) => {
  const ext = filename.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "pdf":
      return <FontAwesome5 name="file-pdf" size={20} color="#e63946" />;
    case "doc":
    case "docx":
      return <FontAwesome5 name="file-word" size={20} color="#2a70d6" />;
    case "ppt":
    case "pptx":
      return <FontAwesome5 name="file-powerpoint" size={20} color="#e76f51" />;
    case "xls":
    case "xlsx":
      return <FontAwesome5 name="file-excel" size={20} color="#2a9d8f" />;
    case "zip":
    case "rar":
      return <FontAwesome5 name="file-archive" size={20} color="#f4a261" />;
    case "png":
    case "jpg":
    case "jpeg":
      return <FontAwesome5 name="file-image" size={20} color="#457b9d" />;
    case "hwp":
      return <FontAwesome5 name="file-alt" size={20} color="#6d597a" />; // 대체 아이콘
    default:
      return <FontAwesome5 name="file" size={20} color="gray" />;
  }
};
export default ProfileScreen;
/*
 */
