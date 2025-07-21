import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen.tsx";
import ProfileScreen from "../screens/ProfileScreen.tsx";
import DetailScreen from "../screens/DetailScreen.tsx";
import { RootStackParamList } from "../types/navigation";
import PostScreen from "../screens/PostScreen.tsx";
import { SearchScreen } from "../screens/SearchScreen.tsx";
import { PersonalScreen } from "../screens/PersonalScreen.tsx";
import FilePreviewScreen from "../screens/FilePreviewScreen.tsx";
import TestScreen from "../screens/EditProfile.tsx";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      initialParams={{ id: 1, ClassName: "자료구조", ProfName: "조행래" }}
    />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Post" component={PostScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Personal" component={PersonalScreen} />
    <Stack.Screen name="FilePreview" component={FilePreviewScreen} />
    <Stack.Screen name="EditProfile" component={TestScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
