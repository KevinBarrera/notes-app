import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoteForm from "../screens/NoteForm";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Add"
      component={NoteForm}
      options={{
        presentation: "modal",
      }}
    />
    <Stack.Screen
      name="Edit"
      component={NoteForm}
      options={{
        presentation: "modal",
      }}
    />
  </Stack.Navigator>
);

export default RootStack;
