import React from 'react';
import './RecipeTile.css';

export default function RecipeTile({ recipe }) {

    //Funcation to Save the Favourites
    const handleSubmit = e => {
        e.preventDefault();
        
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe.recipe.label, recipe.recipe.cuisineType[0], recipe.recipe.mealType[0])
          };
      
        //  let response = fetch("/favourites", options);
         // need to improve the code handling response success or not          
          alert("Added to Favourites Successfully");
    }

    
    const handleSubmit11 = e => {
        e.preventDefault();

        //display the ingredients

    }


    return (
        <div className="recipeTile">

            <img className= "recipeTile_img" src={recipe["recipe"]["image"]} onClick={handleSubmit11}/>
            <p className= "recipeTile_name">{recipe["recipe"]["label"]}</p>
            <button type="submit" 
                    className= "bt_favourite" 
                    onClick={handleSubmit}
            > 
             Add to favourites 
             </button>
        </div>
          
    );
}


