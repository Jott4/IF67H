import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { ReactChild, ReactNode } from "react";

export default function TahomaText({
  title,
  fontSize,
  color,
}: {
  title: string;
  fontSize: number;
  color: string;
}) {
  const [loaded] = useFonts({
    Tahoma: require("../assets/fonts/tahoma.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: "Tahoma", fontSize, color, fontWeight: "bold" }}>
      {title}
    </Text>
  );
}
