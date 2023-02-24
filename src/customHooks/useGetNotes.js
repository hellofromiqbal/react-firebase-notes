import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "../config/firebase";

const useGetNotes = () => {
  const [notesList, setNotesList] = useState([]);

  const notesRef = collection(database, "notes");

  const getNotesList = async () => {
    try {
      const data = await getDocs(notesRef);
      // console.log(data.docs.map((doc) => ({...doc.data(), noteId: doc.id})));
      setNotesList(data.docs.map((doc) => ({...doc.data(), noteId: doc.id})));
    } catch (error) {
      console.log(error);
    };
  };

  return {notesList, setNotesList, getNotesList};
};
 
export default useGetNotes;