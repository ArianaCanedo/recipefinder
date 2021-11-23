import React, { useState, useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import "../App.css";
import '../RecipeTile.css';
import axios from 'axios';

export default function Favourites() {
  
  const [myfavourites, setmyfavourites] = useState([]);
    

    const getFavourites = async () => {
      //Get data from DB table
      try{
        const {data} = await axios.get("/users/favourites", {headers: {authorization: `Bearer ${localStorage.getItem("token")}`}})
          console.log(data);
          setmyfavourites(data)
      } catch(error) {
        console.log(error);
      }
     };

       useEffect(() => {
        getFavourites()
        }, [])

    //Displaying My Favourites data
    return (      
      <div>
        <div className="fav_recipes">           
             {myfavourites.map((recipe) => 
            <div> 
             <img className= "recipeTile_img" src = {recipe.image}/>
             <div>
             <a href = {recipe.shareAs}>check recipe</a>
             </div>
             <h3> {recipe.recipename} </h3>
             <h4>Cuisine Type: {recipe.cuisineType}</h4>
             <h4>Meal Type: {recipe.mealType}</h4>
             </div>
          )}
        
        </div>
      </div>  
    )
}
