import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const addDocumentFireStore = (collections, data) => {
  return addDoc(collection(db, collections), {
    ...data,
    createAt: serverTimestamp(),
  });
};
