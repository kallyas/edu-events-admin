/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../config/firebaseInit';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login({email, password}) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
