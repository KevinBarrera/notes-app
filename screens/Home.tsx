import { StyleSheet, Text, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { RootStackParamList } from "../shared/types";
import NotesList from "../components/NotesList";
import AddButton from "../components/AddButton";

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAddNote = () => {
    navigation.navigate("Add");
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={styles.title}>Notes App</Text>
      <NotesList />
      <AddButton onPress={handleAddNote} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
