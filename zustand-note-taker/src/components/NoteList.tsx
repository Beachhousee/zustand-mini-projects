
import {useNoteStore} from "../store/noteStore";

const NoteList = () => {
  const { notes } = useNoteStore();

  if (notes.length === 0) {
    return <p style={{ textAlign: "center" }}>No notes yet.</p>;
  }

  return (
    <div style={styles.list}>
      {notes.map((note) => (
        <div key={note.id} style={styles.card}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div style={styles.tags}>
            {note.tags.map((tag, index) => (
              <span key={index} style={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "2rem",
    justifyContent: "center",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    width: "250px",
    backgroundColor: "#fafafa",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  tags: {
    marginTop: "0.5rem",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
    padding: "2px 6px",
    marginRight: "5px",
    fontSize: "0.8rem",
  },
};

export default NoteList;
