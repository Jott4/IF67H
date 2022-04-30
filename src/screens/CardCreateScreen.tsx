import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackScreenProps } from "../../types";
import HelveticaText from "../components/Text/HelveticaText";
import TahomaText from "../components/Text/TahomaText";

export default function CardCreateScreen({
  route,
  navigation,
}: RootStackScreenProps<"NewCard">) {
  const [question, setQuestion] = useState(route.params.question || "");
  const [awnser, setAwnser] = useState(route.params.awnser || "");

  useEffect(() => {
    setQuestion(route.params.question || "");
    setAwnser(route.params.awnser || "");
  }, [route]);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", marginTop: 37 }}>
        <TahomaText style={styles.label}>
          Preencha os dados da frente e do verso do flashcard
        </TahomaText>
        <View style={styles.card}>
          <View>
            <View style={{ width: "100%", height: "50%", display: "flex" }}>
              <HelveticaText
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#707070",
                  marginTop: 32,
                }}
              >
                Frente
              </HelveticaText>
              <TextInput
                onChangeText={(text) => setQuestion(text)}
                value={question}
                style={styles.input}
              />
            </View>
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#707070" }}
            ></View>
            <View style={{ width: "100%", height: "50%", display: "flex" }}>
              <HelveticaText
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#707070",
                  marginTop: 32,
                }}
              >
                Verso
              </HelveticaText>
              <TextInput
                onChangeText={(text) => setAwnser(text)}
                value={awnser}
                style={styles.input}
              />
            </View>
          </View>
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
  card: {
    backgroundColor: "#FFF",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 36,
    marginBottom: 21,
    height: 300,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  input: {
    height: 70,
    margin: 12,
    padding: 10,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#414141",
  },
});