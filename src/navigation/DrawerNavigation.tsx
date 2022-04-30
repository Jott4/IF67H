import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CollectionScreen from "../screens/CollectionScreen";

import HomeScreen from "../screens/HomeScreen";
import { DrawerContent } from "../components/DrawerContent";
import CardCreateScreen from "../screens/CardCreateScreen";
import CollectionCreateScreen from "../screens/CollectionCreateScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent logout={() => navigation.navigate("Login")} {...props} />
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#25213e",
        },
        headerStyle: {
          backgroundColor: "#4a4568",
        },
        headerTintColor: "#FFF",
        headerStatusBarHeight: 25,
      }}
    >
      <Drawer.Screen
        name="Collections"
        component={HomeScreen}
        options={{ drawerLabel: "Minhas Coleções", title: "Minhas Coleções" }}
      />

      <Drawer.Screen
        options={{ drawerLabel: "Minhas Coleções", title: "Minhas Coleções" }}
        name="NewCollection"
        component={CollectionCreateScreen}
      />

      <Drawer.Screen
        name="Collection"
        component={CollectionScreen}
        options={{
          title: "Coleção - objetos",
        }}
      />
      <Drawer.Screen
        name="NewCard"
        component={CardCreateScreen}
        options={{ title: "Cartão" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
