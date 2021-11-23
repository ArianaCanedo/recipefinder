import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import RecipeTile from "./RecipeTile";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm"
import "../App.css";
import axios from 'axios';

export default function Home() {

    const YOUR_APP_ID = process.env.REACT_APP_YOUR_APP_ID
    const YOUR_APP_KEY = process.env.REACT_APP_YOUR_APP_KEY
    
  
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState("");
    const [query, setquery] = useState("");
    const [healthLabels, sethealthLabels] = useState("vegan")
    const [myfavourites, setmyfavourites] = useState([]);
  
    let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
  


    const navigate = useNavigate();

    //On Display favourites click, navigate to favourites
    const handleClick = () => {
        navigate ('/favourites');
     } 

    // function for fetching the recipe from api(EDAMAM)

    const getRecipes = async () => {
  
      setLoading(true);
  
      //   Reset the value
       setRecipes(null);
       setError("");
      // calling API
       try {
         const response = await fetch(url);
  
        if (response.ok) {
          
          const data = await response.json();
          console.log(data);
          setRecipes(data.hits);
        } else {
          setError(`Incorrect Recipe name: ${response.status} ${response.statusText}`);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    //this onSubmit function triggers when user click on search button 
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (e.target.id == "1") {
        setError("");
        // function call to get recipes using API
        getRecipes();
      } else {
      setError("");
      setRecipes(null);
  
    } };
  
  
    const handleChange = e => {
      // handle key presses
      sethealthLabels(e.target.value);
    };
  

    return (
        //defining title of the App
        <div className="app">
          <h1 className="mb-5">Recipe Finder App</h1>
          <div className="container">
            <form className="row g-3 mb-5">
            <div className="col-md-4 mb-3">
            {/* defining input for recipe name  */}
              <input 
              type="text" 
              className="form-control shadow"
              placeholder="enter ingredient"
              value={query} 
              onChange={(e) => setquery(e.target.value)} />
            </div>

            {/* Defining drop-down for recipe type */}
            <div className="col-lg-3 mb-3">
              <select className= "form-select form-select-md mb-3 shadow" value={healthLabels} onChange={handleChange}>
                  
                <option value = "vegan">Vegan</option>
                <option value = "wheat-free">Wheat-free</option>
                <option value = "dairy-free">Dairy-free</option>
                <option value = "egg-free">Egg-free</option>
                <option value = "fish-free">Fish-free</option>
                <option value = "low-sugar">Low-Sugar</option>
                <option value = "gluten-free">Gluten-free</option>
                <option value = "tree-nut-free">Tree-nut-free</option>
                <option value = "peanut-free">Peanut-free</option>
                <option value = "vegetarian">Vegetarian</option>
                <option value = "alcohol-free">Alcohol-free</option>
                <option value = "alcohol-cocktail">Alcohol-cocktail</option>
                <option value = "sulfite-free">Sulfite-free</option>
                <option value = "vegetarian">Vegetarian</option>
                
              </select> 
            </div>
          {/* defining search button for given input data  */}
            <div className="col-lg-3 mb-3">
              <button 
                type="submit"
                className="btn btn-success btn-sm shadow" 
                id="1"
                onClick={onSubmit}>
                Search</button>
            </div>   
            
            {/* Deleted display favourites button since there was no need for it */}
          {/* defining button to display my saved favourites */}
            {/* <div className="col-lg-3 mb-3">
              <button 
              type="submit"
              className="btn btn-secondary btn-sm shadow" 
              id="2"
              onClick={handleClick}>
              Display My Favourites</button>
            </div>  */}

          {/* display recipes basen on given selection criteria */}
          </form>
          
          <div className="row">
      
            {/* rendering and displaying required fields using call back function */}
            {recipes && recipes.map((recipe) => {
              return<RecipeTile recipe={recipe}/>;
            })}
          </div>
        </div>
      </div>
        
      );
}
