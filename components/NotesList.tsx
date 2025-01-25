import { StyleSheet, Text, View, FlatList } from "react-native";

import Note from "./Note";
import useNotesStorage from "../hooks/useNotesStorage";

const NotesList = () => {
  const { notes } = useNotesStorage();

  return (
    <View style={styles.container}>
      {!notes.length ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No notes yet</Text>
          <Text style={styles.emptySubText}>
            Start by creating your first note!
          </Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Note note={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  separator: {
    height: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
});
