import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

import { Button } from "react-native-paper";
import { RootStackScreenProps } from "../../types";
import TahomaText from "../components/Text/TahomaText";
import TextInput from "../components/TextInput";
import * as DocumentPicker from "expo-document-picker";
import { Text } from "../components/Themed";
import IconMix from "react-native-vector-icons/AntDesign";
import { theme } from "../core/theme";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createCollection, editCollection } from "../redux/thunks/collection";

export default function CollectionCreateScreen({
  route,
  navigation,
}: RootStackScreenProps<"NewCollection">) {
  const dispatch = useAppDispatch();
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURI, setImageURI] = useState<string>("");

  useEffect(() => {
    setCollectionName(route.params.title || "");
    setDescription(route.params.description || "");
    setImageURI(route.params.image);
  }, [route]);

  const _pickDocument = async () => {
    let document = await DocumentPicker.getDocumentAsync();

    if (document.type === "success") {
      setImageURI(document.uri);
    }
  };

  const addCollection = () => {
    dispatch(
      createCollection({
        name: collectionName,
        description,
        image: imageURI,
      })
    );

    navigation.goBack();
  };

  const updateCollection = () => {
    dispatch(
      editCollection({
        newCollection: {
          name: collectionName,
          description,
          image: imageURI,
        },
        uid: route.params.id || "",
      })
    );

    navigation.goBack();
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
              imageURI ? (
                <Image
                  source={{ uri: imageURI }}
                  style={{
                    margin: "auto",
                    alignSelf: "center",
                    width: 300,
                    height: 150,
                  }}
                />
              ) : (
                <></>
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
        </View>
        <Button
          mode="contained"
          style={{
            width: "100%",
            paddingVertical: 5,
            backgroundColor: "#6a61a1",
          }}
          onPress={() => {
            route.params.editMode ? updateCollection() : addCollection();
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
