import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CollectionScreen from "../screens/CollectionScreen";
import HomeScreen from "../screens/HomeScreen";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#25213e",
        },
      }}
    >
      <Drawer.Screen
        name="Collections"
        component={HomeScreen}
        options={{ drawerLabel: "Minhas Coleções", title: "Minhas Coleções" }}
      />
      <Drawer.Screen name="Collection" component={CollectionScreen} />
    </Drawer.Navigator>
  );
}
