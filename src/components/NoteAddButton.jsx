import { useState } from 'react';
import { addNote } from '../noteStore';

export default function NoteAdder() {
  const [userNote , setUserNote] = useState('');

  return (
    <>
      <label htmlFor="note">Add a note: </label>
      <input
        type="text"
        name="note"
        id="note"
        onChange={(e) => setUserNote(e.target.value)}
      />
      <button onClick={() => addNote(userNote)}>Add</button>
    </>
  )
}