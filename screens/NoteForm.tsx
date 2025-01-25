import { Feather } from "@expo/vector-icons";
import {
  useNavigation,
  NavigationProp,
  RouteProp,
  useRoute,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import uuid from "react-native-uuid";

import { NoteI, RootStackParamList } from "../shared/types";
import CustomButton from "../components/CustomButton";
import useNotesStorage from "../hooks/useNotesStorage";

type AddNoteRouteProp = RouteProp<any>;

const NoteForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { handleAddNote, handleEditNote } = useNotesStorage();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<AddNoteRouteProp>();
  const existingNote = route.params?.note;

  const handleSubmit = () => {
    if (!title || !content) {
      Alert.alert("Please fill in both title and content.");
      return;
    }
    if (existingNote) {
      const updatedNote = { ...existingNote, title, content };
      handleEditNote(updatedNote);
    } else {
      const newNote: NoteI = {
        id: uuid.v4(),
        title,
        content,
      };
      handleAddNote(newNote);
    }
    setTitle("");
    setContent("");
    navigation.goBack();
  };

  useEffect(() => {
    if (existingNote) {
      setTitle(existingNote.title);
      setContent(existingNote.content);
    }
  }, [existingNote]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {existingNote ? "Edit note" : "Add a new note"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={5}
      />
      <CustomButton
        text={existingNote ? "Save changes" : "Add"}
        onPress={handleSubmit}
        icon={<Feather name="edit" size={16} color="#fff" />}
      />
    </View>
  );
};

export default NoteForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#e1e2e3",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 120,
  },
});
