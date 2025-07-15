import { pick, types } from '@react-native-documents/picker';
import { Text, TouchableOpacity } from 'react-native';
import {post} from '../styles/styles';
type FilePickerProps = {
  onFilePicked: (file: { name: string; uri: string }) => void;
};

const FilePicker = ({ onFilePicked }: FilePickerProps) => {
  const handlePick = async () => {
    try {
      const [file] = await pick({ type: [types.allFiles] });
      console.log(file.name, file.uri);
      onFilePicked({ name: file.name!, uri: file.uri }); // ✅ 부모에게 전달
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableOpacity onPress={handlePick} style={post.filePicker}>
      <Text>파일 선택</Text>
    </TouchableOpacity>
  );
};

export default FilePicker;
