import './main.css';
import { SiGitbook } from 'react-icons/si'
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
        <div className="textual-logo">
          <SiGitbook className='icon'/>
          <h1>NOTES</h1>
        </div>
        {user?
          <>
            <p>Your account is still logging in.</p>
            <p>Click the button below to redirect to the home page.</p>
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