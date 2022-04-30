import { Alert, ScrollView, StyleSheet } from "react-native";
import CollectionCard from "../components/Cards/CollectionCard";
import { View } from "../components/Themed";
import { theme } from "../core/theme";
import collectionsJSON from "../../collections";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import Dialog from "react-native-dialog";

export default function HomeScreen() {
  const [collections, setCollections] = useState(collectionsJSON);
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Dialog.Container
        visible={visible}
        contentStyle={{
          backgroundColor: "#332E56",
          borderColor: "#DED5EA",
          borderWidth: 2,
          margin: 50,
        }}
      >
        <Dialog.Description style={{ color: "#f7f7f7", fontSize: 16 }}>
          Você tem certeza que deseja excluir essa coleção?
        </Dialog.Description>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#332e56",
          }}
        >
          <Dialog.Button
            label="SIM"
            onPress={() => setVisible(false)}
            style={{ color: "#f7f7f7" }}
          />
          <Dialog.Button
            label="CANCELAR"
            style={{ color: "#f7f7f7" }}
            onPress={() => setVisible(false)}
          />
        </View>
      </Dialog.Container>

      <ScrollView style={styles.scrollView}>
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            image={collection.image}
            title={collection.title}
            onPress={() =>
              navigation.navigate("Collection", {
                id: collection.id,
                title: collection.title,
              })
            }
            onEdit={() =>
              navigation.navigate("NewCollection", {
                id: collection.id,
                title: collection.title,
                description: "Descrição teste",
                image: collection.image,
                editMode: true,
              })
            }
            onDelete={() => setVisible(true)}
          />
        ))}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate("NewCollection", { editMode: false });
        }}
      />
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#7a71af",
  },
});
