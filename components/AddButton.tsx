import { StyleSheet, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton = ({ onPress }: AddButtonProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
        { position: "absolute", bottom: insets.bottom, right: 16 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 40,
    textAlign: "center",
  },
});
