// src/App.tsx
import Modal from "./components/Modal";
import TriggerButtons from "./components/TriggerButtons";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Zustand Modal Manager</h1>
      <TriggerButtons />
      <Modal />
    </div>
  );
}

export default App;
