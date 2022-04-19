import { FlatList, ScrollView, StyleSheet } from "react-native";
import CollectionCard from "../components/Cards/CollectionCard";
import { View } from "../components/Themed";
import { theme } from "../core/theme";
import { Navigation } from "../types/navigation";
import collectionsJSON from "../../collections";
import { useState } from "react";
export default function HomeScreen({ navigation }: { navigation: Navigation }) {
  const [collections, setCollections] = useState(collectionsJSON);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            image={collection.image}
            title={collection.title}
            onPress={() =>
              navigation.navigate("Collection", {
                id: collection.id,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    padding: 20,
    width: "100%",
  },
});
