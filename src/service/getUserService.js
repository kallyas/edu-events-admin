/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default async function getUsers() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "event_attendees"));
  querySnapshot.forEach((doc) => {
    return data.push({ ...doc.data(), id: doc.id });
  });

  return data;
}

export async function searchUsers(search) {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "event_attendees"));
  querySnapshot.forEach((doc) => {
    return data.push({ ...doc.data(), id: doc.id });
  });

  return search === ""
    ? data
    : data.filter(
        (user) =>
          user?.name?.toLowerCase().includes(search?.toLowerCase()) ||
          user?.email?.toLowerCase().includes(search?.toLowerCase()) ||
          user?.occupation?.toLowerCase().includes(search?.toLowerCase())
      );
}
