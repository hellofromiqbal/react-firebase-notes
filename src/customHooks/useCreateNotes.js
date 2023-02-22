import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../config/firebase';

const useCreateNotes = () => {
  
  const [user] = useAuthState(auth);

  const scheme = yup.object().shape({
    title: yup.string().min(1).max(100).required(),
    description: yup.string().min(1).max(2000).required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(scheme)
  });

  const notesRef = collection(database, "notes");

  const processInput = async (data) => {
    try {
      await addDoc(notesRef, {
        title: data.title,
        description: data.description,
        creator: user?.uid
      });
      reset();
    } catch (error) {
      console.log(error);
    };
  };

  return { register, handleSubmit, processInput };
};
 
export default useCreateNotes;