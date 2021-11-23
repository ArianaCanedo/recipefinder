import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Favourites() {
  const [myfavourites, setmyfavourites] = useState([]);

  const getFavourites = async () => {
    //Get data from DB table
    try {
      const { data } = await axios.get("/users/favourites", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(data);
      setmyfavourites(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const deleteFavourite = async (id) => {
    //Delete data from DB table
    try {
      const { data } = await axios.delete(`/users/favourites/${id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(data);
      setmyfavourites(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);


  //Displaying My Favourites data
  return (
    <div>
      {myfavourites.length === 0 ? <div><h1>Please go home to add a favourite</h1></div> : <div className="container"><h1 className="mb-5">Here are your favourite recipes:</h1>
      <div className="row">
        {myfavourites.map((recipe) => (
          <div key={recipe.id} className="col-lg-4 col-md-6">
          <div className="card border shadow m-3 p-3 rounded-border">
            <img className="card-img mx-auto p-2 m-2" src={recipe.image} />
            <div className="card-body">
              <a href={recipe.shareAs}>check recipe</a>
            </div>
            <div className="card-text m-2">
            <h4 className="recipename"> {recipe.recipename} </h4>
            <p>Cuisine Type: {recipe.cuisineType}</p>
            <p>Meal Type: {recipe.mealType}</p>
            <button type="submit" onClick={() => deleteFavourite(recipe.id)} className="btn btn-primary mb-3">Delete</button>
            </div>
          </div>
          </div>
        ))}
    
      </div>
      </div>}
      
    </div>
  );
}
