import { useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes/Recipes";
import NewRecipe from "./components/NewRecipe/NewRecipe";

const initRecipes = [
  {
    id: "e2",
    imageUrl:
      "https://images.unsplash.com/photo-1644405636176-ee3f6ebd891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80",
    recipeName: "Recipe2",
    recipeDescription: "RecipeDescription2",
  },
  {
    id: "e3",
    imageUrl:
      "https://images.unsplash.com/photo-1636055608368-da999007dbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    recipeName: "Recipe3",
    recipeDescription: "RecipeDescription3",
  },
];

function App() {
  const [recipes, setRecipes] = useState(initRecipes);
  const newRecipeHandler = (newRecipe) =>
    setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);

  const deleteRecipeHandler = (selectedIndex) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = prevRecipes.filter(
        (recipe) => recipe.id !== prevRecipes[selectedIndex].id
      );
      return updatedRecipes;
    });
  };

  let recipeContent = <p>There is no recipe! Would you like to add one?</p>;
  if (recipes.length > 0)
    recipeContent = (
      <Recipes
        onDeleteRecipeHandler={deleteRecipeHandler}
        recipesArray={recipes}
      />
    );

  return (
    <main>
      <NewRecipe onNewRecipeHandler={newRecipeHandler} />
      {recipeContent}
    </main>
  );
}

export default App;
