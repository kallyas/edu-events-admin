/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit";
import { collection, addDoc, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";

const db = getFirestore();

export async function AddNewProject(data) {
    const docRef = await addDoc(collection(db, "lms_projects"), data)
    if (!docRef.id) return new Error('An error ocurred while creating an event')
    const projectSnap = await getDoc(doc(db, "lms_projects", docRef.id))
    const project = { id: projectSnap.id, ...projectSnap.data() }
    return project

}

export async function getProjects() {
    const data = []
    const projects = await getDocs(collection(db, "lms_projects"));
    projects.forEach((doc) => {
        return data.push({ ...doc.data(), id: doc.id })
    });
    return data
}