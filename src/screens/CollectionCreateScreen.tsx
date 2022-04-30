import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";
import { RootStackScreenProps } from "../../types";
import HelveticaText from "../components/Text/HelveticaText";
import TahomaText from "../components/Text/TahomaText";
import TextInput from "../components/TextInput";

export default function CollectionCreateScreen({
  route,
  navigation,
}: RootStackScreenProps<"NewCollection">) {
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", marginTop: 37 }}>
        <TahomaText style={styles.label}>
          Preencha os dados referente à coleção a ser criada
        </TahomaText>
        <View>
          <TextInput
            label="Nome coleção"
            returnKeyType="next"
            value={collectionName}
            onChangeText={(text: string) => setCollectionName(text)}
            autoComplete={false}
          />
          <TextInput
            label="Descrição"
            returnKeyType="next"
            value={description}
            onChangeText={(text: string) => setDescription(text)}
            autoComplete={false}
            style={{ paddingBottom: 100 }}
          />
        </View>
        <Button
          mode="contained"
          style={{
            width: "100%",
            paddingVertical: 5,
            backgroundColor: "#6a61a1",
          }}
          onPress={() => {
            navigation.navigate("Collection", {
              id: route.params.id || 0,
              title: route.params.title || "",
            });
          }}
        >
          {route.params.editMode ? "Salvar alterações" : "Cadastrar"}
        </Button>
      </View>
      <Button
        mode="outlined"
        color="#ffffff"
        style={{
          width: "100%",
          borderColor: "#FFF",
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        cancelar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#332E56",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontFamily: "Tahoma",
    textAlign: "center",
    fontSize: 18,
    color: "#FFF",
  },
  input: {
    height: 70,
    margin: 12,
    padding: 10,
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 28,
    fontWeight: "bold",
    color: "#414141",
  },
});
