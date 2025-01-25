export interface RootStackParamList {
  Home: undefined;
  Add: undefined;
  Edit: { note: NoteI };
}

export interface NoteI {
  id: string;
  title: string;
  content: string;
}
