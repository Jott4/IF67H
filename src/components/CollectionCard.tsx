import {
  Image,
  Text,
  ImageSourcePropType,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import FaIcon from "@expo/vector-icons/FontAwesome5";
import TahomaText from "./TahomaText";
interface ICollectionCard {
  image: any;
  title: string;
  onPress: () => void;
}

export default function CollectionCard({
  image,
  title,
  onPress,
}: ICollectionCard) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.center}>
        <Image source={image} />
        <View style={styles.text}>
          <TahomaText title={title} fontSize={36} color="#27aca7"></TahomaText>
        </View>
      </View>
      <View style={styles.between}>
        <View style={styles.trash}>
          <FaIcon name="trash-alt" size={32} color="#4472C4" />
        </View>
        <FaIcon name="pen" size={32} color="#FF2929" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFF",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  between: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trash: {
    marginBottom: 25,
  },
  text: {
    marginLeft: 15,
  },
});
