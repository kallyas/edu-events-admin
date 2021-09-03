/* eslint-disable no-unused-vars */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import app from "../config/firebaseInit"


export default async function loginUser(data) {
    const auth = getAuth();
    try {
        const signIn = await signInWithEmailAndPassword(auth, data.email, data.password)
        const user = signIn.user;
        return user.stsTokenManager
    } catch (error) {
        return error.message
    }
}