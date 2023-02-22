import './main.css';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase';

const Main = () => {
  const navigate = useNavigate();

  const handleGetIn = async () => {
    await signInWithPopup(auth, provider);
    navigate("/home");
  };

  return (
    <section className="main-container">
      <div className="main-container__textual">
        <h1>NOTES</h1>
        <p>Use this app with your Google account</p>
        <button className="button" onClick={handleGetIn}>GET IN</button>
      </div>
    </section>
  );
}
 
export default Main;