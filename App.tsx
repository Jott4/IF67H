import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import InititalNavigation from "./src/navigation/InititalNavigation";
import { initializeApp } from "firebase/app";
import { StatusBar } from "expo-status-bar";
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
        <SafeAreaProvider>
          <InititalNavigation />
          <StatusBar hidden />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
