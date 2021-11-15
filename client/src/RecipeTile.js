import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import './RecipeTile.css';

export default function RecipeTile({ recipe }) {

    //Function to Save my Favourites in DB table(favourites)
    
    const handleSubmit = e => {
        e.preventDefault();
        
    // Creates entry to DB
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({recipename:recipe.recipe.label, cuisineType:recipe.recipe.cuisineType[0], 
                mealType:recipe.recipe.mealType[0], shareAs:recipe.recipe.shareAs, image:recipe.recipe.image})
          };
      
         let response = fetch("/favourites", options);
         console.log(response);
         // need to improve the code handling response success or not          
          alert("Added to Favourites Successfully");
    }
    
    useEffect(() => {
       console.log(recipe.recipe.shareAs);
    }, [])
    

    //Call back function to Home.js, to display the Recipes
    return (
        recipe["recipe"] ["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
        <div className="recipeTile">
            <a href={recipe.shareAs}><img className= "recipeTile_img" src={recipe["recipe"]["image"]} /> </a>
            <p className= "recipeTile_name">{recipe["recipe"]["label"]}</p>
            
            {/* Check recipe link */}
            <a href={`${recipe.recipe.shareAs}`}> check recipe</a>

            {/* Add favourites button */}
            <button type="submit" 
                    className= "bt_favourite" 
                    onClick={handleSubmit}
            > 
             Add to favourites 
             </button>
        </div>
        )   
    );
}


