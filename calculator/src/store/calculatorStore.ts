import { create } from "zustand";

type HistoryItem = {
  expression: string;
  result: number;
};

type CalcState = {
  history: HistoryItem[];
  addToHistory: (item: HistoryItem) => void;
  clearHistory: () => void;
};

export const useCalculatorStore = create<CalcState>((set) => ({
  history: [],
  addToHistory: (item) =>
    set((state) => ({ history: [...state.history, item] })),
  clearHistory: () => set({ history: [] }),
}));