import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { ReactChild, ReactNode } from "react";
import { TextProps } from "../Themed";

export default function TahomaText(props: TextProps) {
  const [loaded] = useFonts({
    Tahoma: require("../../assets/fonts/tahoma.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text {...props} style={[props.style, { fontFamily: "Tahoma" }]} />;
}
