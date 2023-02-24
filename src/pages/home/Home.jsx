import './home.css';
import NotesForm from '../../components/createForm/CreateForm';
import NotesList from '../../components/notesList/NotesList';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';

const Home = () => {
  const navigate = useNavigate();

  const handleGetOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <section className="home-container">
      <NotesForm title={'ADD NOTES'}/>
      <NotesList/>
      <footer>
        <small>Copyright &copy; 2022 | Muhammad Iqbal.</small>
        <button className="button" onClick={handleGetOut}>Get Out</button>
      </footer>
    </section>
  );
}
 
export default Home;