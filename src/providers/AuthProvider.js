import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = React.createContext({
  signup: () => {},
  login: () => {},
  logout: () => {},
  facebookLogin: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new FacebookAuthProvider();
  const navigate = useNavigate();

  function facebookLogin() {
    setLoading(true);
    signInWithPopup(auth, provider).then((res) => {
      if (res.user) {
        navigate('/');
      }
    });
  }

  //with fairebase make authorization
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //with firebase create user, set email and password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
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
    logout,
    facebookLogin,
    loading,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
