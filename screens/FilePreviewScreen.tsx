// FilePreviewScreen.tsx
import React from "react";
import { View, Text, Platform, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import Pdf from "react-native-pdf";
import { WebView } from "react-native-webview";

type FilePreviewRouteProp = RouteProp<RootStackParamList, "FilePreview">;

const FilePreviewScreen = () => {
  const route = useRoute<FilePreviewRouteProp>();
  const { file } = route.params;

  const fileExt = file.name.split(".").pop()?.toLowerCase()||"";

  if (fileExt === "pdf") {
    return (
      <View style={{ flex: 1 }}>
        <Pdf
          source={{ uri: file.uri }}
          style={{ flex: 1 }}
          onError={(error) => {
            console.log("PDF load error:", error);
          }}
        />
      </View>
    );
  }

  // 이미지
  if (["png", "jpg", "jpeg"].includes(fileExt)) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: file.uri }}
          style={{ flex: 1, resizeMode: "contain" }}
        />
      </View>
    );
  }

  // 웹뷰로 열 수 있는 파일 (html, txt 등)
  if (["txt", "html", "htm"].includes(fileExt)) {
    return (
      <WebView source={{ uri: file.uri }} style={{ flex: 1 }} />
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>이 형식의 미리보기를 지원하지 않습니다.</Text>
    </View>
  );
};

export default FilePreviewScreen;
