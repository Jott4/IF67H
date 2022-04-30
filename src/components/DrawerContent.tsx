import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text } from "react-native-paper";
import IconMix from "react-native-vector-icons/Entypo";

export function DrawerContent({ navigation }: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <View>
          <Image
            source={{
              uri: "https://i.pravatar.cc/129",
            }}
            style={styles.photo}
          />
          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 12,
              fontSize: 16,
            }}
          >
            Fernando Soares
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            marginVertical: 25,
            width: "70%",
            height: 2,
            backgroundColor: "#FFF",
          }}
        />
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
          onPress={() => navigation.navigate("Collections")}
        >
          <IconMix name="sound-mix" size={24} color="#FFF" />
          <Text style={{ color: "#FFF", fontSize: 24 }}>
            &nbsp;&nbsp;Minhas coleções
          </Text>
        </Pressable>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            marginTop: 18,
          }}
        >
          <IconMix name="chevron-left" size={24} color="#FFF" />
          <Text style={{ color: "#FFF", fontSize: 24 }}>
            &nbsp;&nbsp;Logout
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  photo: {
    width: 129,
    height: 129,
  },
});
