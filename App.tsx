import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { initializeApp } from "firebase/app";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import InititalNavigation from "./src/navigation/InititalNavigation";

const firebaseConfig = {
  apiKey: "AIzaSyBXbeyUqGOfSifIg7s57F6bhaB8iyepAWE",
  authDomain: "mind-booster-b51c1.firebaseapp.com",
  projectId: "mind-booster-b51c1",
  storageBucket: "mind-booster-b51c1.appspot.com",
  messagingSenderId: "608274014813",
  appId: "1:608274014813:web:e3df6531985da15d0de3b4",
};

initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#6200ee",
      accent: "#6200ee",
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <InititalNavigation />
            {/* <DrawerNavigation /> */}
          </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
