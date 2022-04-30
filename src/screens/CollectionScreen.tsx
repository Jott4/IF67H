import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, FAB, Paragraph, Portal, Provider } from "react-native-paper";
import collections from "../../collections";
import { RootStackScreenProps } from "../../types";
import { CardAwnser } from "../components/Cards/CardAwnser";
import CardViewer from "../components/Cards/CardViewer";
import HelveticaText from "../components/Text/HelveticaText";
import TahomaText from "../components/Text/TahomaText";
import Dialog from "react-native-dialog";

import TextInput from "../components/TextInput";
import { Text } from "../components/Themed";
import { theme } from "../core/theme";

export default function CollectionScreen({
  route,
  navigation,
}: RootStackScreenProps<"Collection">) {
  const allQuestions = collections.find(
    (collection) => collection.id === route.params.id
  )?.questions;

  if (!allQuestions) {
    return <View></View>;
  }

  const [questions, setQuestions] = useState(allQuestions);
  const [filter, setFilter] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setQuestions(
      allQuestions.filter((question) => {
        return (
          question.question.toLowerCase().includes(filter.toLowerCase()) ||
          question.awnser.toLowerCase().includes(filter.toLowerCase())
        );
      })
    );
  }, [filter]);

  if (isPlaying) {
    return <Playing questions={allQuestions} setIsPlaying={setIsPlaying} />;
  }

  return (
    <View style={styles.container}>
      <Dialog.Container
        visible={visible}
        contentStyle={{
          backgroundColor: "#332E56",
          borderColor: "#DED5EA",
          borderWidth: 2,
          margin: 50,
        }}
      >
        <Dialog.Description style={{ color: "#f7f7f7", fontSize: 16 }}>
          Você tem certeza que deseja excluir esse cartão?
        </Dialog.Description>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#332e56",
          }}
        >
          <Dialog.Button
            label="SIM"
            onPress={() => setVisible(false)}
            style={{ color: "#f7f7f7" }}
          />
          <Dialog.Button
            label="CANCELAR"
            style={{ color: "#f7f7f7" }}
            onPress={() => setVisible(false)}
          />
        </View>
      </Dialog.Container>

      <ScrollView style={styles.scrollView}>
        <TextInput
          label="Filtro"
          returnKeyType="next"
          value={filter}
          onChangeText={(text: string) => setFilter(text)}
          autoComplete={false}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsPlaying(true)}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Jogar!
          </Text>
        </Button>

        {questions?.map((question) => (
          <CardViewer
            question={question.question}
            key={question.question}
            awnser={question.awnser}
            onEdit={() =>
              navigation.navigate("NewCard", {
                id: route.params.id,
                title: route.params.title,
                question: question.question,
                awnser: question.awnser,
                editMode: true,
              })
            }
            onDelete={() => setVisible(true)}
          />
        ))}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() =>
          navigation.navigate("NewCard", {
            id: route.params.id,
            title: route.params.title,
          })
        }
      />
    </View>
  );
}

export function Playing({
  questions,
  setIsPlaying,
}: {
  questions: { question: string; awnser: string }[];
  setIsPlaying: (isPlaying: boolean) => void;
}) {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[0]);
  const [isShowingAwnser, setisShowingAwnser] = useState(false);

  useEffect(() => {
    setQuestion(questions[index]);
  }, [index]);

  return (
    <View style={styles.gameContainer}>
      <TahomaText style={{ fontSize: 18, color: "#FFF", fontFamily: "Tahoma" }}>
        Cartão {index + 1} / {questions.length}
      </TahomaText>

      <View style={styles.card}>
        {isShowingAwnser ? (
          <CardAwnser question={question.question} awnser={question.awnser} />
        ) : (
          <HelveticaText
            style={{
              fontWeight: "bold",
              fontSize: 28,
              color: "#414141",
              alignSelf: "center",
            }}
          >
            {question.question}
          </HelveticaText>
        )}
      </View>
      {isShowingAwnser ? (
        index + 1 === questions.length ? (
          <Button
            mode="contained"
            style={{
              width: "100%",
              paddingVertical: 5,
              backgroundColor: "#61a170",
            }}
            onPress={() => setIsPlaying(false)}
          >
            Finalizar
          </Button>
        ) : (
          <Button
            mode="contained"
            style={{
              width: "100%",
              paddingVertical: 5,
              backgroundColor: "#6a61a1",
            }}
            onPress={() => {
              setisShowingAwnser(false);
              setIndex(index + 1);
            }}
          >
            Proximo
          </Button>
        )
      ) : (
        <Button
          mode="contained"
          style={{
            width: "100%",
            paddingVertical: 5,
            backgroundColor: "#6a61a1",
          }}
          onPress={() => setisShowingAwnser(true)}
        >
          Virar
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    marginBottom: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#57966A",
    fontWeight: "bold",
    fontSize: 36,
    marginBottom: 21,
    marginTop: 10,
    alignSelf: "center",
    paddingHorizontal: 25,
  },
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,

    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 36,
    marginBottom: 21,
    height: 402,
    width: "100%",
    display: "flex",
    justifyContent: "center",

    paddingHorizontal: 28,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#7a71af",
  },
});
