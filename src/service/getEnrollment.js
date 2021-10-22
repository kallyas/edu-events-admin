/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default async function getEnrollment() {
  const enrollment = [];
  const querySnapshot = await getDocs(collection(db, "enrollment"));
  querySnapshot.forEach((doc) => {
    return enrollment.push({ ...doc.data(), id: doc.id });
  });

  return enrollment;
}
