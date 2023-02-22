import './createForm.css';
import useCreateNotes from '../../customHooks/useCreateNotes';

const CreateForm = () => {
  const { register, handleSubmit, processInput } = useCreateNotes();

  return (
    <section className="createForm-container">
      <h2>CREATE NOTES</h2>
      <form onSubmit={handleSubmit(processInput)}>
        <input type="text" placeholder='Title' {...register("title")} autoComplete='off'/>
        <textarea placeholder='Description' {...register("description")} autoComplete='off'></textarea>
        <input className='button' type="submit" value="SAVE"/>
      </form>
    </section>
  );
}
 
export default CreateForm;