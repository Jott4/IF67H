import React from "react";
import { View, Text } from "react-native";

import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import AppLoading from "expo-app-loading";

export default function LogoText({ fontSize }: { fontSize: number }) {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text
      style={{
        fontFamily: "Pacifico_400Regular",
        fontSize: fontSize,
        color: "white",
      }}
    >
      Mind Booster
    </Text>
  );
}
