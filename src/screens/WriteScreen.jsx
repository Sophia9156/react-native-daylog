import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WriteHeader from "../components/layout/Write/WriteHeader";

export default function WriteScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
  }
});