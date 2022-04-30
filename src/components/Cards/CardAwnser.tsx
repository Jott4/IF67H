import { View } from "react-native";
import { theme } from "../../core/theme";
import HelveticaText from "../Text/HelveticaText";

export function CardAwnser({
  question,
  awnser,
}: {
  question: string;
  awnser: string;
}) {
  return (
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
        <HelveticaText
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: theme.colors.greyHelvetica,
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          {question}
        </HelveticaText>
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
        <HelveticaText
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: theme.colors.greyHelvetica,
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          {awnser}
        </HelveticaText>
      </View>
    </View>
  );
}
