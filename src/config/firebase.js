import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhgjbH90ye2QoqkqJdFskHBiwrUVm5rQ4",
  authDomain: "crud-app-968d8.firebaseapp.com",
  projectId: "crud-app-968d8",
  storageBucket: "crud-app-968d8.appspot.com",
  messagingSenderId: "412660455580",
  appId: "1:412660455580:web:8f1ee8680cda36ddf5f559"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, provider, database };