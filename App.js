import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
