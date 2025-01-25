import { useContext } from "react";

import { NotesContext } from "../contexts/NotesContext";

const useNotesStorage = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes should be used inside NotesProvider.");
  }
  return context;
};

export default useNotesStorage;
