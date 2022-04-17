import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import { Navigation } from "../types/navigation";

export default function CollectionScreen({
  navigation,
}: {
  navigation: Navigation;
}) {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Navbar title="Coleção" />
      <View>
        <TextInput
          label="Filtro"
          returnKeyType="next"
          value={filter}
          onChangeText={(text: string) => setFilter(text)}
          autoComplete={false}
        />
        <Button>Jogar!</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {},
});
