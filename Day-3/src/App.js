import React, { useState } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>Recipe Management App</h1>
      <RecipeForm onAdd={addRecipe} />
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
    </div>
  );
};

export default App;
