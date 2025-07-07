import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = () => {
  const handleSelectFile = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // 'photo' | 'video' | 'mixed'
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('사용자가 취소함');
        } else if (response.errorCode) {
          console.log('에러 발생:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const file = response.assets[0];
          console.log('선택된 파일:', file);
        }
      }
    );
  };

  return (
    <View>
      <Button title="파일 선택" onPress={handleSelectFile} />
    </View>
  );
};

export default ImagePicker;
