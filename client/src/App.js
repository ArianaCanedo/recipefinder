import { useState, useEffect } from "react";

import "./App.css";
import RecipeTile from "./RecipeTile";



function App() {
  
  const YOUR_APP_ID = "9a922325"
  const YOUR_APP_KEY = "96453a31e5925836a664cd6d5cd82a3b"	
  
  const [ingredients, setingredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState("");
  const [query, setquery] = useState("");
  const [healthLabels, sethealthLabels] = useState("vegan")
  const [myfavourites, setmyfavourites] = useState([]);

  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  useEffect(() => {
  getFavourites()
  }, [])
  
  const getRecipes = async () => {

    setLoading(true);

    //   Reset the value
     setRecipes(null);
     setError("");

     try {
       const response = await fetch(url);

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setRecipes(data.hits);
      } else {
        setError(`Incorrect Recipe name: ${response.status} ${response.statusText}`);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //this submit prevents default reloading 
  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.id == "1") {
      setError("");
      
      getRecipes();
    } else {
    setError("");
    setRecipes(null);
  //   getFavourites();
  } };


  const handleChange = e => {
    // handle key presses
    sethealthLabels(e.target.value);
  };

  const getFavourites = async () => {
    
     await fetch("/favourites")
        .then(response => response.json())
        .then(recipe =>
          //check this set favourites
          setmyfavourites(recipe)
         )
        .catch(error => {
          console.log(error);
         });
    };
 

  return (
    <div className="app">
    <h1>Recipe Finder App</h1>
    <form className="app_searchForm" onSubmit={onSubmit}>
      <input 
      type="text" 
      className="app_input"
      placeholder="enter ingredient"
      value={query} 
      onChange={(e) => setquery(e.target.value)} />
        
    <select className= "app_healthLabels" value={healthLabels} onChange={handleChange}>
    

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

    <button 
    type="submit"
    className="app_submit" 
    id="1"
    onClick={onSubmit}>
    Search</button>  

   <button 
    type="submit"
    className="app_myfavourites" 
    id="2"
    onClick={onSubmit}>
    Display My Favourites</button>

    </form>
    <div className="app_recipes">

      {/* //rendering */}
      {recipes && recipes.map((recipe) => {
        return<RecipeTile recipe={recipe}/>;
      })}

      {myfavourites.map((recipe) => 
        <p>{recipe.recipename}</p>
      )}

    </div>
    </div>
    
  );
}

export default App;
