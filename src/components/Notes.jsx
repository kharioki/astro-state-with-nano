import { useStore } from '@nanostores/solid';
import { For } from 'solid-js/web';
import { notes } from '../noteStore';

export default function Notes() {
  const $notes = useStore(notes);

  return (
    <>
      <h3>My Notes</h3>
      <ul>
        <For each={$notes()}>
          {(note) => <li>{note}</li>}
        </For>
      </ul>
    </>
  )
}