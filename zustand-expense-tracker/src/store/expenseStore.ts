import { create } from "zustand";

type Expense = {
  id: string;
  title: string;
  amount: number;
};

type ExpenseStore = {
  expenses: Expense[];
  addExpense: (title: string, amount: number) => void;
  removeExpense: (id: string) => void;
  total: number;
};

const useExpenseStore = create<ExpenseStore>((set, get) => ({
  expenses: [],
  total: 0,

  addExpense: (title, amount) => {
    const newExpense = {
      id: crypto.randomUUID(),
      title,
      amount,
    };

    const updatedExpenses = [...get().expenses, newExpense];
    const updatedTotal = updatedExpenses.reduce(
      (acc, exp) => acc + exp.amount,
      0
    );

    set({ expenses: updatedExpenses, total: updatedTotal });
  },

  removeExpense: (id) => {
    const updatedExpenses = get().expenses.filter((e) => e.id !== id);
    const updatedTotal = updatedExpenses.reduce(
      (acc, exp) => acc + exp.amount,
      0
    );

    set({ expenses: updatedExpenses, total: updatedTotal });
  },
}));

export default useExpenseStore;
