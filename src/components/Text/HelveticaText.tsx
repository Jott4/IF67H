import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { ReactChild, ReactNode } from "react";
import { TextProps } from "../Themed";

export default function HelveticaText(props: TextProps) {
  const [loaded] = useFonts({
    "Helvetica Neue": require("../../assets/fonts/Helvetica-Neue.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text {...props} style={[props.style, { fontFamily: "Helvetica Neue" }]} />
  );
}
