import './noteItem.css';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import useDeleteNotes from '../../customHooks/useDeleteNotes';

const NoteItem = ({note}) => {
  const navigate = useNavigate();

  const { deleteNote } = useDeleteNotes();

  return (
    <article className="note-item">
      <div className="note-item__detail">
        <h3>{note.title}</h3>
        <p>{note.description}</p>
      </div>
      <div className="note-item__action">
        <FiEdit className='icon' onClick={() => navigate(`/edit/${note.noteId}`)}/>
        <FiTrash className='icon' onClick={() => deleteNote(note.noteId)}/>
      </div>
    </article>
  );
}
 
export default NoteItem;