import React from "react";
import { View, Text, TouchableOpacity, Button, Image, FlatList } from "react-native";
import { styles } from "../styles/styles";
import { list } from "../utils/data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{flex:1}}>
      <View style={{ flex: 0.1, flexDirection: "row" }}>
        {/* 왼쪽 빈 공간 (80%) */}
        <View style={{ flex: 8 }} />

        {/* 오른쪽 버튼 공간 (20%) */}
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Post")}>
            <Image
              source={require("../PlusButton.png")}
              style={styles.PlusButton}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:0.9}}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.Touchable}
              onPress={() =>
                navigation.navigate("Profile", {
                  id: item.id,
                  ClassName: item.ClassName,
                  ProfName: item.ProfName,
                })
              }
            >
              <Text style={styles.buttonText}>{item.ClassName}</Text>
              <Text style={styles.buttonText}>{item.ProfName}</Text>
              <Text style={styles.buttonDetailText}>조회수</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
    </View>
  );
};

export default HomeScreen;
