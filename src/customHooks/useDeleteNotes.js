import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../config/firebase";

const useDeleteNotes = () => {
  const deleteNote = async (noteId) => {
    try {
      const noteToBeDeleted = doc(database, "notes", noteId);
      await deleteDoc(noteToBeDeleted);
    } catch (error) {
      console.log(error);
    };
  };

  return { deleteNote };
};
 
export default useDeleteNotes;