import React from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> Expense Tracker</h1>
      <AddExpenseForm />
      <hr style={styles.divider} />
      <ExpenseList />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  divider: {
    margin: "20px 0",
  },
};

export default App;
