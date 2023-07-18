import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom/dist'
import Login from "./components/login/Login";
import CreateUser from "./components/create-user/CreateUser";
import Home from "./components/Home/Home";
import {getAuth, onAuthStateChanged } from "@firebase/auth"
//get the onAuthStateChanged method (add in with the others)

export default function App() {
  onAuthStateChanged(getAuth(),(user) =>{
    console.log(user)
  })
return (
  <Router>
    <Routes>
    <Route
        path="/"
        Component={Home}
      />
      <Route
        path="/login"
        Component={Login}
      />
      <Route
        path='/create-user'
        Component={CreateUser}
      />
    </Routes>
  </Router>
)
}


