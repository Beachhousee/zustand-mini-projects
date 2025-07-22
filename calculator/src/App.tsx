import Calculator from "./components/Calculator";
import History from "./components/History";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🧮 Zustand Calculator</h1>
      <Calculator />
      <History />
    </div>
  );
}

export default App;
