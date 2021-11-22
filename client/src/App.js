import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import "./App.css";
import RecipeTile from "./RecipeTile";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm"
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

// defining router to navigate Home and favourites page

function App() {
  
 
   return ( 
    <AuthProvider> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element= {<LoginForm/>}/>
          <Route path="/register" element= {<SignupForm/>}/>
          <Route path="/favourites" element = {
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  );
    
  
}

export default App;
