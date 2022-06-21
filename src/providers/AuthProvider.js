import React, { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = React.createContext({
  signup: () => {},
  login: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //with fairebase make authorization
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //with firebase create user, set email and password
  function login(email, password) {
    console.log('jestem w login');
    return signInWithEmailAndPassword(auth, email, password);
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
    signup,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
