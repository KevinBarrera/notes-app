import { Ionicons, Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { NoteI, RootStackParamList } from "../shared/types";
import CustomButton from "./CustomButton";
import useNotesStorage from "../hooks/useNotesStorage";

interface NoteProps {
  note: NoteI;
}

const Note = ({ note }: NoteProps) => {
  const { handleDeleteNote } = useNotesStorage();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleEditNote = (note: NoteI) => {
    navigation.navigate("Edit", { note });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text>{note.content}</Text>
      <View style={styles.buttons}>
        <CustomButton
          text="Edit"
          onPress={() => handleEditNote(note)}
          icon={<Feather name="edit" size={16} color="#fff" />}
        />
        <CustomButton
          text="Delete"
          onPress={() => handleDeleteNote(note.id)}
          backgroundColor="#ee4544"
          icon={<Ionicons name="trash" size={16} color="#fff" />}
        />
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e2e3",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
});
