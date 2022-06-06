/* eslint-disable no-unused-vars */
import app from "../config/firebaseInit"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import moment from "moment";

const db = getFirestore()

export default async function getEvents() {
    const data = []
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
        return data.push({
            id: doc.id,
            description: doc.data().body,
            title: doc.data().title,
            date: moment(doc.data().date).format("YYYY-MM-DD"),
            to: moment(doc.data().date).format('YYYY-MM-DD'),
            allDay: true,
            completed: doc.data().completed,
            excert: doc.data().excert,
            location: doc.data().location,
            image: doc.data().img_url,
            categories: doc.data().categories,
            time: moment(doc.data().date).format('h:mm a'),
        })
    });

    return data
}