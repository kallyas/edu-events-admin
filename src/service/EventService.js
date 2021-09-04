/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit"
import { collection, addDoc, getFirestore } from "firebase/firestore"; 

const db = getFirestore();

export default async function createEvent(data) {
    try {
        const docRef = await addDoc(collection(db, "events"), {...data});
        if (!docRef.id) return new Error('An error ocurred while creating an event')
        return docRef
    } catch (error) {
        return error
    }
}
