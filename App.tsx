import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
