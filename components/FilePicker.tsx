/*
import React from 'react';
import { View, Button, Text } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FilePicker = () => {
  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // PDF, XLSX, HWP 등 포함
      });
      console.log('파일 이름:', res[0].name);
      console.log('파일 타입:', res[0].type);
      console.log('파일 URI:', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('사용자가 취소함');
      } else {
        console.error('오류 발생:', err);
      }
    }
  };

  return (
    <View>
      <Button title="파일 선택" onPress={handleFilePick} />
    </View>
  );
};

export default FilePicker;
*/