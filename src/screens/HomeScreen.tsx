import { FlatList, ScrollView, StyleSheet } from "react-native";
import CollectionCard from "../components/CollectionCard";
import Navbar from "../components/Navbar";
import { View } from "../components/Themed";
import { theme } from "../core/theme";
import { Navigation } from "../types/navigation";
import collectionsJSON from "../../collections.json";
import { useState } from "react";
export default function HomeScreen({ navigation }: { navigation: Navigation }) {
  const [collections, setCollections] = useState(collectionsJSON);
  return (
    <>
      {/* <Navbar title="Minhas coleções" navigation={navigation} /> */}
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {collections.map((collection, idx) => (
            <CollectionCard
              key={idx}
              image={collection.image}
              title={collection.title}
              onPress={() => navigation.navigate("Collection", { collection })}
            />
          ))}
        </ScrollView>
      </View>
    </>
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
