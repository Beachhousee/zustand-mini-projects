import { useState } from "react";
import { useCalculatorStore } from "../store/calculatorStore";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");

  const { addToHistory } = useCalculatorStore();

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result = 0;

    switch (operator) {
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = b !== 0 ? a / b : NaN; break;
    }

    const expression = `${a} ${operator} ${b}`;
    addToHistory({ expression, result });
  };

  return (
    <div className="calculator">
      <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}
