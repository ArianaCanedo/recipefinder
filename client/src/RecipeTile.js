import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import './RecipeTile.css';

export default function RecipeTile({ recipe }) {

    //Function to Save to my Favourites
    const handleSubmit = e => {
        e.preventDefault();
        
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
    
    const handleSubmit11 = e => {
        e.preventDefault();
        //display the ingredients

    }
// //to insert a new pokemon into my database

// app.post("/pokemon", function(req, res) {
//     //get pokemon data from request body
//     console.log(req.body);
//     //see if this id already exists
//     let pokemon = data.find(p => p.id == newPokemon.id);
//     //if pokemon exists then return 409 error
//     if (pokemon) {
//       res.status(409).send({ error: "pokemon already exists" });
//     } else {
//       data.push(newPokemon);
//       //status code 201 means : new pokemon created
//       res.status(201).send(newPokemon);
//     }
//   });
  

    return (
        <div className="recipeTile">

            <a href={recipe.shareAs}><img className= "recipeTile_img" src={recipe["recipe"]["image"]} /> </a>
            <p className= "recipeTile_name">{recipe["recipe"]["label"]}</p>
            <a href={`${recipe.recipe.shareAs}`}> check recipe</a>
            <button type="submit" 
                    className= "bt_favourite" 
                    onClick={handleSubmit}
            > 
             Add to favourites 
             </button>
        </div>
          
    );
}


