import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../FireBase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const provider= new GoogleAuthProvider();

const SignInWithEmailAndPass =(email,password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email, password );
}

const logInWithEmailAndPass =(email, password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
}


const loginWithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
}

const logOut= ()=>{
setLoading(true);
return signOut(auth);
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loginWithGoogle,
    setUser,
    setLoading,
    logOut,
    SignInWithEmailAndPass,
    logInWithEmailAndPass
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
