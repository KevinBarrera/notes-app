import { createContext, useEffect, useState } from "react";

import { NoteI } from "../shared/types";
import {
  addNote,
  deleteNote,
  editNote,
  getNotes,
} from "../services/secureStoreService";

interface NotesContextProps {
  loading: boolean;
  notes: NoteI[];
  handleAddNote: (newNote: NoteI) => Promise<void>;
  handleDeleteNote: (id: string) => Promise<void>;
  handleEditNote: (editedNote: NoteI) => Promise<void>;
  loadNotes: () => Promise<void>;
}

export const NotesContext = createContext<NotesContextProps | undefined>(
  undefined,
);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<NoteI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadNotes = async () => {
    setLoading(true);
    const storedNotes = await getNotes();
    setNotes(storedNotes);
    setLoading(false);
  };

  const handleAddNote = async (newNote: NoteI) => {
    await addNote(newNote);
    await loadNotes();
  };

  const handleEditNote = async (editedNote: NoteI) => {
    await editNote(editedNote);
    await loadNotes();
  };

  const handleDeleteNote = async (id: string) => {
    await deleteNote(id);
    await loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        handleAddNote,
        handleEditNote,
        handleDeleteNote,
        loadNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
