// RecipeList.js
import React from 'react';
import './styles.css';

const RecipeList = ({ recipes, onDelete }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add a new recipe!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <div>
              <strong>Ingredients:</strong>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Instructions:</strong>
              <p>{recipe.instructions}</p>
            </div>
            <button className="delete-btn" onClick={() => onDelete(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
