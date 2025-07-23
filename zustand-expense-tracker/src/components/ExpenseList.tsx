import React from "react";
import useExpenseStore from "../store/expenseStore";

const ExpenseList = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const removeExpense = useExpenseStore((state) => state.removeExpense);

  return (
    <ul style={styles.list}>
      {expenses.map((expense) => (
        <li key={expense.id} style={styles.item}>
          <span>
            {expense.title} — ₹{expense.amount}
          </span>
          <button onClick={() => removeExpense(expense.id)} style={styles.button}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "4px",
  },
  button: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "4px 8px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default ExpenseList;
