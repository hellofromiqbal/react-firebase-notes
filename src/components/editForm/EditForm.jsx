import './editForm.css';
import useEditNotes from '../../customHooks/useEditNotes';
import { useNavigate } from 'react-router-dom';

const EditForm = ({note}) => {
  const navigate = useNavigate();

  const { register, handleSubmit, processInput } = useEditNotes(note.noteId);

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section className="editForm-container">
      <h2>EDIT NOTES</h2>
      <form onSubmit={handleSubmit(processInput)}>
        <input type="text" placeholder='Title' {...register("title")} defaultValue={note.title} autoComplete='off'/>
        <textarea placeholder='Description' {...register("description")} defaultValue={note.description} autoComplete='off'></textarea>
        <div className="form-action">
          <input className='button' type="submit" value="SAVE"/>
          <button className="button" onClick={(e) => handleCancel(e)}>Cancel</button>
        </div>
      </form>
    </section>
  );
}
 
export default EditForm;