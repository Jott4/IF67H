import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import TahomaText from "../Text/TahomaText";
import FaIcon from "@expo/vector-icons/FontAwesome5";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
} from "react-native-paper";

export default function CardViewer({
  question,
  awnser,
  onEdit,
  onDelete,
}: {
  question: string;
  awnser: string;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.horizontal}>
          <View style={{ ...styles.vertical, ...styles.marginRight }}>
            <TahomaText style={styles.label}>Frente</TahomaText>
            <TahomaText style={styles.question}>{question}</TahomaText>
          </View>

          <View style={styles.vertical}>
            <TahomaText style={styles.label}>Verso</TahomaText>
            <TahomaText style={styles.question}>{awnser}</TahomaText>
          </View>
        </View>
        <View style={styles.horizontal}>
          <Pressable onPress={onEdit} style={styles.marginRight}>
            <FaIcon name="pen" size={16} color="#FF2929" />
          </Pressable>
          <Pressable onPress={onDelete}>
            <FaIcon name="trash-alt" size={16} color="#4472C4" />
          </Pressable>
        </View>
      </View>
    </>
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
    marginVertical: 6,
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
  label: {
    fontSize: 12,
    color: "#868686",
  },
  question: {
    fontSize: 24,
    color: "#27aca7",
  },
});
