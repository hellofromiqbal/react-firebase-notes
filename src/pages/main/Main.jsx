import './main.css';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Main = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleGetIn = async () => {
    await signInWithPopup(auth, provider);
    navigate("/home");
  };

  return (
    <section className="main-container">
      <div className="main-container__textual">
        <h1>NOTES</h1>
        {user?
          <>
            <p>Already logged in. Click below to redirect to your home page.</p>
            <button className="button" onClick={() => navigate("/home")}>HOME PAGE</button>
          </>
          :
          <>
            <p>Use this app with your Google account</p>
            <button className="button" onClick={handleGetIn}>GET IN</button>
          </>
        }
      </div>
    </section>
  );
}
 
export default Main;