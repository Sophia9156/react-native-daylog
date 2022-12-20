import { useState, useContext } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import WriteHeader from "../components/layout/Write/WriteHeader";
import WriteEditor from "../components/layout/Write/WriteEditor";
import LogContext from "../context/LogContext";

export default function WriteScreen() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigation = useNavigation();

  const { onCreate } = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <WriteHeader onSave={onSave} />
        <WriteEditor 
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
  },
  avoidingView: {
    flex: 1,
  }
});
