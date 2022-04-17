import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import CardViewer from "../components/CardViewer";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { Navigation } from "../types/navigation";

export default function CollectionScreen({
  navigation,
}: {
  navigation: Navigation;
}) {
  const [filter, setFilter] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        label="Filtro"
        returnKeyType="next"
        value={filter}
        onChangeText={(text: string) => setFilter(text)}
        autoComplete={false}
      />
      <Button mode="contained" style={styles.button}>
        Jogar!
      </Button>
      <CardViewer question="Salve" awnser="Koe" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#57966A",
    fontWeight: "bold",
    marginBottom: 21,
    marginTop: 10,
  },
});
