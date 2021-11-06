import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyB6GO9pDLo5sg41yIkq2arv0sFXSp_Ja7k",
  authDomain: "edu-platform-f3a82.firebaseapp.com",
  databaseURL: "https://edu-platform-f3a82-default-rtdb.firebaseio.com",
  projectId: "edu-platform-f3a82",
  storageBucket: "edu-platform-f3a82.appspot.com",
  messagingSenderId: "195690313426",
  appId: "1:195690313426:web:41981410ab710f6e431f0b",
  measurementId: "G-XC1FX816H7"
};

export const app = initializeApp(firebaseConfig);
