import { useCalculatorStore } from "../store/calculatorStore";

export default function History() {
  const { history, clearHistory } = useCalculatorStore();

  return (
    <div className="history">
      <h3>Calculation History</h3>
      {history.length === 0 ? (
        <p>No calculations yet.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.expression} = <strong>{item.result}</strong>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearHistory}>Clear History</button>
    </div>
  );
}
