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
      <View style={styles.horizontal}>
        <View style={{ ...styles.vertical, ...styles.marginRight }}>
          <TahomaText color="#868686" title="Frente" fontSize={12} />
          <TahomaText color="#27aca7" title={question} fontSize={24} />
        </View>

        <View style={styles.vertical}>
          <TahomaText color="#868686" title="Frente" fontSize={12} />
          <TahomaText color="#27aca7" title={awnser} fontSize={24} />
        </View>
      </View>
      <View style={styles.horizontal}>
        <View style={styles.marginRight}>
          <FaIcon name="pen" size={16} color="#FF2929" />
        </View>
        <FaIcon name="trash-alt" size={16} color="#4472C4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  marginRight: {
    marginRight: 24,
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
