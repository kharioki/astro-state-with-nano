import { useStore } from '@nanostores/react';
import { notes } from '../noteStore';

export default function NotesList() {
  const $notes = useStore(notes);

  return (
    <>
      <ul>
        {$notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </>
  )
}