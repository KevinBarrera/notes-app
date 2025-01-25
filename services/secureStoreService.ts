import * as SecureStore from "expo-secure-store";

import { NoteI } from "../shared/types";

const NOTES_KEY = "notes";

const getNotes = async (): Promise<NoteI[]> => {
  try {
    const storedNotes = await SecureStore.getItemAsync(NOTES_KEY);
    const notes = storedNotes ? JSON.parse(storedNotes) : [];
    return notes;
  } catch (error) {
    console.log("Error getting notes.", error);
    return [];
  }
};

const saveNotes = async (notes: NoteI[]): Promise<void> => {
  try {
    await SecureStore.setItemAsync(NOTES_KEY, JSON.stringify(notes));
  } catch (error) {
    console.log("Error saving new note.", error);
  }
};

const addNote = async (newNote: NoteI): Promise<void> => {
  try {
    const notes = await getNotes();
    notes.push(newNote);
    await saveNotes(notes);
  } catch (error) {
    console.log("Error adding a new note.", error);
  }
};

const editNote = async (editedNote: NoteI): Promise<void> => {
  try {
    const notes = await getNotes();
    const noteToUpdateIndex = notes.findIndex(
      (note) => note.id === editedNote.id,
    );
    if (noteToUpdateIndex !== -1) {
      notes[noteToUpdateIndex] = editedNote;
      await saveNotes(notes);
    }
  } catch (error) {
    console.log("Error editing the note.", error);
  }
};

const deleteNote = async (id: string): Promise<void> => {
  try {
    const notes = await getNotes();
    const newNotes = notes.filter((note) => note.id !== id);
    await saveNotes(newNotes);
  } catch (error) {
    console.log("Error deleting the note.", error);
  }
};

export { getNotes, saveNotes, addNote, editNote, deleteNote };
