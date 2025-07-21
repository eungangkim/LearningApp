import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { Search } from "../styles/Search";
import { useState ,useEffect} from "react";
import SearchList from "../components/SearchList";

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState(""); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(searchText); // 입력이 멈춘 뒤 500ms 후 확정
    }, 5000);

    return () => clearTimeout(timer); // 입력 중이면 이전 타이머 취소
  }, [searchText]);

  return (
    <View style={Search.container}>
      <View style={Search.searchBar}>
        <TextInput
          style={[Search.textInput]}
          value={searchText}
          placeholder="검색어 입력"
          onChangeText={(text) => setSearchText(text)}
        ></TextInput>
        {/* 기능이 없는 돋보기 이미지(어떤 기능으로 사용될지 미정)*/}
        <TouchableOpacity
          onPress={() => {
            console.log("입력한 단어:" + searchText);
          }}
          style={Search.TouchableOpacity}
        >
          <Image source={require("../files/SearchImage.png")}
          style={Search.searchImage}></Image>
        </TouchableOpacity>
      </View>
      <SearchList searchText={debouncedText}></SearchList>
    </View>
  );
};
