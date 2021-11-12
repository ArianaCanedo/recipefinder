import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import "./App.css";
import RecipeTile from "./RecipeTile";



function App() {
  
  // const YOUR_APP_ID = "9a922325"
  // const YOUR_APP_KEY = "96453a31e5925836a664cd6d5cd82a3b"	
  
  // const [ingredients, setingredients] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [recipes, setRecipes] = useState(null);
  // const [error, setError] = useState("");
  // const [query, setquery] = useState("");
  // const [healthLabels, sethealthLabels] = useState("vegan")
  // const [myfavourites, setmyfavourites] = useState([]);

  // let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  // useEffect(() => {
  // getFavourites()
  // }, [])
  
  // const getRecipes = async () => {

  //   setLoading(true);

  //   //   Reset the value
  //    setRecipes(null);
  //    setError("");

  //    try {
  //      const response = await fetch(url);

  //     if (response.ok) {
  //       console.log(response);
  //       const data = await response.json();
  //       setRecipes(data.hits);
  //     } else {
  //       setError(`Incorrect Recipe name: ${response.status} ${response.statusText}`);
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // //this submit prevents default reloading 
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if (e.target.id == "1") {
  //     setError("");
      
  //     getRecipes();
  //   } else {
  //   setError("");
  //   setRecipes(null);
  // //   getFavourites();
  // } };


  // const handleChange = e => {
  //   // handle key presses
  //   sethealthLabels(e.target.value);
  // };

  // const getFavourites = async () => {
    
  //    await fetch("/favourites")
  //       .then(response => response.json())
  //       .then(recipe =>
  //         //check this set favourites
  //         setmyfavourites(recipe)
  //        )
  //       .catch(error => {
  //         console.log(error);
  //        });
  //   };
 
   return ( <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/favourites" element = {<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
    
  
}

export default App;
