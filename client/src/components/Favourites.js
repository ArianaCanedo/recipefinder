import React, { useState, useEffect } from 'react';

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
        <div> 
             {myfavourites.map((recipe) => 
            <div> <h3> {recipe.recipename} </h3>
             <img src = {recipe.image}/>
            <a href = {recipe.shareAs}>check recipe</a></div>
          )}
        
        </div>
    )
}
