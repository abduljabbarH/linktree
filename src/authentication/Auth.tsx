import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  createUserWithEmailAndPassword
} from "@firebase/auth";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function useAuth() {
  const [authed, setAuthed] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  return {
    authed,
    login(email: string, password: string) {
      return signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
          setAuthed(true);
          setUser(userCredential.user);
      }).catch((error) => {
        setAuthed(false)
      });
    },
    logout() {
      return signOut(getAuth())
      .then(() => {
        setAuthed(false);
        setUser(null)
      })
    },
    createUser(email: string, password: string) {
      return createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
          setAuthed(true);
          setUser(userCredential.user);
      }).catch(() => {
        setAuthed(false)
      })
    }
  };
}

export function PrivateRoutes() {
  return useAuth().authed ? <Outlet/> : <Navigate to={'/login'}/>
}
