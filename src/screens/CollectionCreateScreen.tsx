import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";

import { Button } from "react-native-paper";
import { RootStackScreenProps } from "../../types";
import TahomaText from "../components/Text/TahomaText";
import TextInput from "../components/TextInput";
import * as DocumentPicker from "expo-document-picker";
import { Text } from "../components/Themed";
import IconMix from "react-native-vector-icons/AntDesign";
import { theme } from "../core/theme";

export default function CollectionCreateScreen({
  route,
  navigation,
}: RootStackScreenProps<"NewCollection">) {
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>("");

  useEffect(() => {
    setCollectionName(route.params.title || "");
    setDescription(route.params.description || "");
    if (route.params.image) setImage(route.params.image);
  }, [route]);

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
  };

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
          <Pressable
            onPress={() => _pickDocument()}
            style={{
              width: "100%",
              backgroundColor: "#EFEFEF",
              height: 190,
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 9,
            }}
          >
            <Text style={{ color: "#6200ee" }}>Imagem</Text>
            {route.params.editMode ? (
              image ? (
                <Image
                  source={image}
                  style={{ margin: "auto", alignSelf: "center" }}
                />
              ) : (
                <View></View>
              )
            ) : (
              <IconMix
                name="plus"
                size={48}
                color="#DEDEDE"
                style={{ margin: "auto", alignSelf: "center" }}
              />
            )}

            <View></View>
          </Pressable>
          {/* <Button
            mode="outlined"
            color="#ffffff"
            style={{
              width: "100%",
              borderColor: "#FFF",
            }}
           
          >
            Selecionar imagem
          </Button> */}
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
    backgroundColor: theme.colors.darkBackground,
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
    color: theme.colors.greyHelvetica,
  },
});
