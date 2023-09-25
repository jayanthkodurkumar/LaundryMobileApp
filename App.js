import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
