import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./Themed";
import Icon from "@expo/vector-icons/Feather";
import { Navigation } from "../types/navigation";

export default function Navbar({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Icon
        name="menu"
        size={32}
        color="white"
        onPress={() => {
          console.log("eai");
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4a4568",
    height: 57,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginLeft: 11,
  },
});
