import { NavigationContainer } from "@react-navigation/native";

import RootStack from "./navigation/RootStack";
import { NotesProvider } from "./contexts/NotesContext";

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NotesProvider>
  );
};

export default App;
