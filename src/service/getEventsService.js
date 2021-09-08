/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore()

export default async function getEvents() {
    const data = []
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
    return data.push({...doc.data(), id: doc.id})
    });
    
    return data
}