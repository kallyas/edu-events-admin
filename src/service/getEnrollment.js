/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore();

export default async function getEnrollment() {
  const enrollment = [];
  const querySnapshot = await getDocs(collection(db, "enrollment"));
  querySnapshot.forEach((doc) => {
    return enrollment.push({ ...doc.data(), id: doc.id });
  });

  return enrollment;
}

export async function searchEnrollment(search) {
  const enrollment = [];
  const q = query(collection(db, "enrollment"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    return enrollment.push({ ...doc.data(), id: doc.id });
  });

  const filteredEnrollment = enrollment.filter((en) =>
    en.name.toLowerCase().includes(search.toLowerCase())
  );

  return filteredEnrollment;
}
