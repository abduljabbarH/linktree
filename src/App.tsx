import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom/dist'
import Login from "./components/login/Login";
import CreateUser from "./components/create-user/CreateUser";
import Home from "./components/Home/Home";
import { PrivateRoutes } from "./authentication/Auth";
//get the onAuthStateChanged method (add in with the others)

export default function App() {
  return (
    <Router>
      <Routes>
        <Route Component={PrivateRoutes}>
          <Route path="/" Component={Home}></Route>
        </Route>
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


