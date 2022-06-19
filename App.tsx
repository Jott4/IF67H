import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import "./src/firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import InititalNavigation from "./src/navigation/InititalNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer", "AsyncStorage has been extracted"]);

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
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <SafeAreaProvider>
              <InititalNavigation />
              {/* <DrawerNavigation /> */}
            </SafeAreaProvider>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}
