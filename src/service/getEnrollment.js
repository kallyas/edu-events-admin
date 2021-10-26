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

  return search === ""
    ? enrollment
    : enrollment.filter(
        (en) =>
          en?.firstName?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.lastName?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.email?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.phoneNumber?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.experience?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.education?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.gender?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.country?.toLowerCase().includes(search?.toLowerCase()) ||
          en?.track?.toLowerCase().includes(search?.toLowerCase())
      );
}
