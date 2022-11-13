import { useState } from 'react';
import { useStore } from '@nanostores/react';

import { addNote, notes } from '../noteStore';

export default function NoteAdder() {
  const [userNote , setUserNote] = useState('');
  const $notes = useStore(notes);

  return (
    <>
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
      <ul>
        {$notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </>
  )
}