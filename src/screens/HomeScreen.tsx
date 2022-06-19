import { Alert, ScrollView, StyleSheet } from "react-native";
import CollectionCard from "../components/Cards/CollectionCard";
import { View } from "../components/Themed";
import { theme } from "../core/theme";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import Dialog from "react-native-dialog";
import { deleteCollection, fetchCollections } from "../redux/thunks/collection";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectCollections } from "../redux/resolvers/collection";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { collections } = useAppSelector(selectCollections);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Dialog.Container
        visible={visible}
        contentStyle={{
          backgroundColor: theme.colors.darkBackground,
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
            backgroundColor: theme.colors.darkBackground,
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
            key={collection.uid}
            image={collection.image}
            title={collection.name}
            onPress={() =>
              navigation.navigate("Collection", {
                id: collection.uid || "",
                title: collection.name,
              })
            }
            onEdit={() =>
              navigation.navigate("NewCollection", {
                id: collection.uid,
                title: collection.name,
                description: "Descrição teste",
                image: collection.image,
                editMode: true,
              })
            }
            onDelete={() => dispatch(deleteCollection(collection.uid || ""))}
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
    backgroundColor: theme.colors.fab,
  },
});
