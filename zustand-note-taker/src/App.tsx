
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📝 Note Taker with Tags</h1>
<AddNote></AddNote>
      <NoteList />
    </div>
  );
}

export default App;
