import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => (
  <View style={styles.footer}>
    <Text>하단 고정 바입니다</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#aaa",
  },
});

export default Footer;
