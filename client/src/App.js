import { useState } from "react";
import './App.css';
import RecipeTile from "./RecipeTile";

function App() {
  
  const YOUR_APP_ID = "9a922325"
  const YOUR_APP_KEY = "96453a31e5925836a664cd6d5cd82a3b"	
  
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState("");
  const [query, setquery] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
   
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
    </form>
    <div>
      
      {/* //rendering */}
      {recipes && recipes.map((recipe) => {
        return<RecipeTile recipe={recipe}/>;
      })}

    </div>
    </div>
    
  );
}

export default App;
