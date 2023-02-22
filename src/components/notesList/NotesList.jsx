import './notesList.css';
import useGetNotes from "../../customHooks/useGetNotes";
import NoteItem from "../noteItem/NoteItem";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';

const NotesList = () => {
  const { notesList } = useGetNotes();

  const [user] = useAuthState(auth);

  return (
    <section className="notesList-container">
      <div className="notesList-header">
        <h2>Notes List</h2>
        <button className="button" onClick={() => window.location.reload()}>Refresh</button>
      </div>
      <div className="notesList-content">
        {notesList.filter((data) => data.creator === user?.uid).map((note) => (
          <NoteItem note={note} key={note.noteId}/>
        ))}
      </div>
    </section>
  );
}
 
export default NotesList;