import { View } from "react-native";
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
            color: "#707070",
            marginTop: 32,
          }}
        >
          Frente
        </HelveticaText>
        <HelveticaText
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#414141",
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          {question}
        </HelveticaText>
      </View>
      <View
        style={{ width: "100%", height: 1, backgroundColor: "#707070" }}
      ></View>
      <View style={{ width: "100%", height: "50%", display: "flex" }}>
        <HelveticaText
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "#707070",
            marginTop: 32,
          }}
        >
          Verso
        </HelveticaText>
        <HelveticaText
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#414141",
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
