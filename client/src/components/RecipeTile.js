import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import './RecipeTile.css';

export default function RecipeTile({ recipe }) {
  //Function to Save my Favourites in DB table(favourites)

  const addFavourite = async () => {
    try {
      const results = await axios.post(
        "/users/favourites",
        {
          recipename: recipe.recipe.label,
          cuisineType: recipe.recipe.cuisineType[0],
          mealType: recipe.recipe.mealType[0],
          shareAs: recipe.recipe.shareAs,
          image: recipe.recipe.image,
        },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(auth.ok){
      addFavourite();
    }else {
      navigate("/login");
    }

    
  };

  useEffect(() => {
    console.log(recipe.recipe.shareAs);
  }, []);

  //Call back function to Home.js, to display the Recipes
  return (
    
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="col-lg-4 col-md-6">
      <div className="card border shadow m-3 p-3 rounded-border">
        {/* image display */}
        <a href={recipe.shareAs}>
          <img className="card-img" src={recipe["recipe"]["image"]} />{" "}
        </a>
        <div>
        {/* recipe name display */}
        <div className="card-text mt-2">
        <h4>{recipe["recipe"]["label"]}</h4>

        {/* Check recipe link */}
        <a href={`${recipe.recipe.shareAs}`}> check recipe</a>

        {/* Add favourites button */}
        <button type="submit" className="btn btn-primary m-3" onClick={handleSubmit}>
          Add to favourites
        </button>
        </div>
        </div>
      </div>
      </div>
    )
    
  );
}
