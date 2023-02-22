/* eslint-disable react-hooks/exhaustive-deps */
import './edit.css';
import { useParams } from 'react-router-dom';
import EditForm from '../../components/editForm/EditForm';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../config/firebase';
import { useEffect, useState } from 'react';

const Edit = () => {
  const noteId = useParams().id;

  const [note, setNote] = useState({});

  const getNote = async () => {
    const noteToBeEditedRef = doc(database, "notes", noteId);
    const noteToBeEdited = await getDoc(noteToBeEditedRef);
    setNote({...noteToBeEdited.data(), noteId: noteToBeEdited.id});
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <section className="home-container">
      <EditForm note={note}/>
    </section>
  );
}
 
export default Edit;