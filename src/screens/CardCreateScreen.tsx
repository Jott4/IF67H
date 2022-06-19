import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackScreenProps } from "../../types";
import HelveticaText from "../components/Text/HelveticaText";
import TahomaText from "../components/Text/TahomaText";
import { theme } from "../core/theme";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { Card } from "../redux/resolvers/cards";
import { createCard, editCard } from "../redux/thunks/cards";

export default function CardCreateScreen({
  route,
  navigation,
}: RootStackScreenProps<"NewCard">) {
  const dispatch = useAppDispatch();

  const [question, setQuestion] = useState(route.params.question || "");
  const [answer, setAnswer] = useState(route.params.answer || "");

  const addCard = (card: Card) => {
    dispatch(createCard(card));
    navigation.navigate("Collection", {
      id: route.params.colecoesRef || "",
      title: route.params.title || "",
    });
  };
  const updateCard = ({ question, answer, uid }: Card) => {
    dispatch(
      editCard({
        newCard: {
          answer,
          question,
        },
        uid: uid || "",
      })
    );
    navigation.navigate("Collection", {
      id: route.params.colecoesRef || "",
      title: route.params.title || "",
    });
  };

  useEffect(() => {
    setQuestion(route.params.question || "");
    setAnswer(route.params.answer || "");
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
                  color: theme.colors.greyText,
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
              style={{
                width: "100%",
                height: 1,
                backgroundColor: theme.colors.greyText,
              }}
            ></View>
            <View style={{ width: "100%", height: "50%", display: "flex" }}>
              <HelveticaText
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: theme.colors.greyText,
                  marginTop: 32,
                }}
              >
                Verso
              </HelveticaText>
              <TextInput
                onChangeText={(text) => setAnswer(text)}
                value={answer}
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
            route.params.editMode
              ? updateCard({
                  answer,
                  question,
                  uid: route.params.id || "",
                  colecoesRef: route.params.colecoesRef || "",
                })
              : addCard({
                  question,
                  answer,
                  colecoesRef: route.params.colecoesRef,
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
  card: {
    backgroundColor: "#FFF",
    borderColor: theme.colors.greyText,
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
    color: theme.colors.greyHelvetica,
  },
});
