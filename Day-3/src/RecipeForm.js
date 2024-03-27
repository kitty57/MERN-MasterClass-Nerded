// RecipeForm.js
import React, { useState } from 'react';
import './styles.css';

const RecipeForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions
    };
    onAdd(newRecipe);
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <textarea className="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea className="form-control" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
