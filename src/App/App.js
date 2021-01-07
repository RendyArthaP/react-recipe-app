import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './App.css';
// import getRecipes from '../Service/getRecipes';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')
  
  const APP_ID = "e9fbe7f5";
  const APP_KEY = "b4dd523819be62babc6c9c71d7140e12"
  
  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch (
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="flex flex-col w-full justify-center px-4">
      <h1 className="text-center text-2xl pt-4 font-bold">Find Your Recipe Here!</h1>
      <form
        className="flex justify-center py-4"
        onSubmit={getSearch}
      >
        <input
          className="border border-black rounded focus:outline-none hover:outline-none"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="border w-20 bg-blue-400 rounded text-white mx-2" type="submit">
          Search
        </button>
      </form>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      
    </div>
  );
}
 
export default App;