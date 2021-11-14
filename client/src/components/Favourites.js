import React, { useState, useEffect } from 'react';
import "../App.css";
import '../RecipeTile.css';

export default function Favourites() {

    const [myfavourites, setmyfavourites] = useState([]);
    
    
    const getFavourites = async () => {
      
        await fetch("/favourites")
           .then(response => response.json())
           .then(recipes =>
             //check this set favourites
             setmyfavourites(recipes)
            )
           .catch(error => {
             console.log(error);
            });
       };

       useEffect(() => {
        getFavourites()
        }, [])

    return (       
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
    )
}
