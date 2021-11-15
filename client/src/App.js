import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import "./App.css";
import RecipeTile from "./RecipeTile";



function App() {
  
 
   return ( <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/favourites" element = {<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
    
  
}

export default App;
