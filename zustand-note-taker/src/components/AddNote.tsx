import React, { useState } from 'react';
import { useNoteStore } from '../store/noteStore';
import { v4 as uuidv4 } from 'uuid';




const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const addNote =useNoteStore((state)=>state.addNote)

  return (
    <div>
      
    </div>
  )
}

export default AddNote;
