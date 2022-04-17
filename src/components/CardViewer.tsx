import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TahomaText from "./TahomaText";
import FaIcon from "@expo/vector-icons/FontAwesome5";

export default function CardViewer({
  question,
  awnser,
}: {
  question: string;
  awnser: string;
}) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.vertical}>
          <TahomaText color="#868686" title="Frente" fontSize={12} />
          <TahomaText color="#868686" title={question} fontSize={24} />
        </View>

        <View style={styles.vertical}>
          <TahomaText color="#868686" title="Frente" fontSize={12} />
          <TahomaText color="#868686" title={awnser} fontSize={24} />
        </View>
      </View>
      <View style={styles.horizontal}>
        <FaIcon name="trash-alt" size={32} color="#4472C4" />
        <FaIcon name="pen" size={32} color="#FF2929" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
