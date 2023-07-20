import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  createUserWithEmailAndPassword,
  
} from "@firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function useAuth() {
  const [user, setUser] = useState<any>();
  return {
    async login(email: string, password: string) {
      return await signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
        return userCredential.user.getIdToken();
      }).catch((error) => {
        return Promise.reject(error)
      });
    },
    logout() {
      return signOut(getAuth())
      .then(() => {
        // better place to remove auth session storage
      })
    },
    async createUser(email: string, password: string) {
      return await createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
        return userCredential.user.getIdToken()
      }).catch((error) => {
        return Promise.reject(error)
      });
    }
  };
}

export function PrivateRoutes() {
  console.log(sessionStorage.getItem('authToken'))
  if(sessionStorage.getItem('authToken')){console.log('test if clause')}
  return sessionStorage.getItem('authToken') ? <Outlet/> : <Navigate to={'/login'}/>
  // return useAuth().authed ? <Outlet/> : <Navigate to={'/login'}/>
}
