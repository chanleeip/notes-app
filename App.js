import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import Add_page from "./screens/add_page";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
        <Add_page />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
