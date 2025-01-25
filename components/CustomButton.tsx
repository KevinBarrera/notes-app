import { Pressable, Text, View, StyleSheet } from "react-native";

interface CustomButtonProps {
  backgroundColor?: string;
  icon?: React.ReactNode;
  text: string;
  textColor?: string;
  onPress: () => void;
}

const CustomButton = ({
  backgroundColor = "#000",
  icon,
  text,
  textColor = "#fff",
  onPress,
}: CustomButtonProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.button,
      { backgroundColor },
      pressed && styles.buttonPressed,
    ]}
  >
    <View style={styles.content}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  </Pressable>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});
