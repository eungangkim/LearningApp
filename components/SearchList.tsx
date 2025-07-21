import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { list } from "../utils/data";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Search } from "../styles/Search";

const SearchList = ({ searchText }: { searchText: string }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // 검색어에 해당하는 항목만 필터링 (className 또는 profName 포함)
  const filteredList = searchText.trim() === ""
    ? list
    : list.filter(item =>
        item.className.toLowerCase().includes(searchText.toLowerCase()) ||
        item.profName.toLowerCase().includes(searchText.toLowerCase())
      );

  return (
    <FlatList
      style={Search.list}
      data={filteredList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() =>
              navigation.navigate("Profile", {
                id: item.id,
                ClassName: item.className,
                ProfName: item.profName,
                Description: item.description,
                files: item.files,
              })
            }
          >
            <Text style={styles.buttonText}>{item.className}</Text>
            <Text style={styles.buttonText}>{item.profName}</Text>
            <Text style={styles.buttonDetailText}>조회수</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default SearchList;
