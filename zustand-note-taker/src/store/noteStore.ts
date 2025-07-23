// src/store/noteStore.ts

import { create } from 'zustand';

//  Type for a single Note
type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[]; // like ["personal", "work"]
};

// Type for the entire store
type NoteStore = {
  notes: Note[];
  searchTerm: string;
  activeTag: string | null;
  addNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  setSearchTerm: (term: string) => void;
  setActiveTag: (tag: string | null) => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
  //  Initial state
  notes: [],
  searchTerm: '',
  activeTag: null,

  //  Add a new note to the list
  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),
  //  Delete a note by id
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((n) => n.id !== id),
    })),

  //  Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Set active tag for filtering
  setActiveTag: (tag) => set({ activeTag: tag }),
}));
