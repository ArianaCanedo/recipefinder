import { useState } from "react";
import "./App.css";
import RecipeTile from "./RecipeTile";



function App() {
  
  const YOUR_APP_ID = "9a922325"
  const YOUR_APP_KEY = "96453a31e5925836a664cd6d5cd82a3b"	
  
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState("");
  const [query, setquery] = useState("");
  const [healthLabels, sethealthLabels] = useState("vegan")

  const getRecipes = async () => {

    setLoading(true);

    //   Reset the value
     setRecipes(null);
     setError("");

     
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
   

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
    getRecipes();
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
    <input 
    type="submit"
    className="app_submit" 
    value="Search" />

    
    {/* <select className= "app_healthLabels" value={healthLabels}> */}
    <select className= "app_healthLabels">
      
<option onClick={()=> sethealthLabels("vegan")}>Vegan</option>
<option onClick={()=> sethealthLabels("alcohol-free")}>Alcohol-free</option>
<option onClick={()=> sethealthLabels("alcohol-cocktail")}>Alcohol-Cocktail</option>
<option onClick={()=> sethealthLabels("celery-free")}>Celery-free</option>
<option onClick={()=> sethealthLabels("wheat-free")}>Wheat-free</option>
<option onClick={()=> sethealthLabels("dairy-free")}>Dairy-free</option>
<option onClick={()=> sethealthLabels("DASH")}>DASH</option>
<option onClick={()=> sethealthLabels("egg-free")}>Egg-free</option>
<option onClick={()=> sethealthLabels("fish-free")}>Fish-free</option>
<option onClick={()=> sethealthLabels("low-sugar")}>Low-Sugar</option>
<option onClick={()=> sethealthLabels("gluten-free")}>Gluten-free</option>
<option onClick={()=> sethealthLabels("immuno-supportive")}>Immuno-supportive</option>
<option onClick={()=> sethealthLabels("vegan")}>Vegan</option>
<option onClick={()=> sethealthLabels("vegetarian")}>Vegetarian</option>
    </select>
    </form>
    <div className="app_recipes">

      {/* //rendering */}
      {recipes && recipes.map((recipe) => {
        return<RecipeTile recipe={recipe}/>;
      })}

    </div>
    </div>
    
  );
}

export default App;
