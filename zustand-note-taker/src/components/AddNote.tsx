import React, { useState } from 'react';
import { useNoteStore } from '../store/noteStore';
import { v4 as uuidv4 } from 'uuid';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const addNote = useNoteStore((state) => state.addNote);

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: uuidv4(),
      title,
      content,
      tags: tags.split(',').map((tag) => tag.trim().toLowerCase()),
    };

    addNote(newNote);
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <div style={styles.box}>
      <h2>Add Note</h2>
      <input
        style={styles.input}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.textarea}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button style={styles.button} onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddNote;

const styles: { [key: string]: React.CSSProperties } = {
  box: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
  },
  textarea: {
    width: '100%',
    height: '60px',
    padding: '0.5rem',
    marginBottom: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
};
  