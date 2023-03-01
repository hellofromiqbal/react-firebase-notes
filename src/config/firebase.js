import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdvqWQWQMJZvXRYcQPi6mBOsRRYliKbn0",
  authDomain: "database-project-bc3cb.firebaseapp.com",
  projectId: "database-project-bc3cb",
  storageBucket: "database-project-bc3cb.appspot.com",
  messagingSenderId: "947623416423",
  appId: "1:947623416423:web:25b2e12648e91dd7d9bac2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, provider, database };