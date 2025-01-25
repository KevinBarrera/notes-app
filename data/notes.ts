import { NoteI } from "../shared/types";

const generateDummyData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: `id-${index + 1}`,
    title: `Note ${index + 1}`,
    content: "This is a sample of a note to have dummy data.",
  }));
};

export const notesData: NoteI[] = generateDummyData(5);
