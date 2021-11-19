import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import "./App.css";
import RecipeTile from "./RecipeTile";
import Login from "./components/LoginForm";
import SignUp from "./components/SignupForm"

// defining router to navigate Home and favourites page

function App() {
  
 
   return ( <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login" element= {<Login/>}/>
      <Route path="/register" element= {<SignUp/>}/>
      <Route path="/favourites" element = {<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
    
  
}

export default App;
