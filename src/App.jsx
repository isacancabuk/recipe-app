import { useState, useEffect } from "react";
import "./App.css";
import Recipes from "./components/Recipes/Recipes";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import EditRecipe from "./components/EditRecipe/EditRecipe";

const initData = {
  state: false,
  selectedIndex: -1,
  data: {},
};

function App() {
  const [recipes, setRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("recipes")) || [];
  });
  const [editRecipeData, setEditRecipeData] = useState(initData);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  });

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

  const editRecipeCarrier = (selectedIndex) => {
    const data = {
      state: true,
      index: selectedIndex,
      data: recipes[selectedIndex],
    };
    setEditRecipeData(data);
  };
  const editRecipeHandler = (sentData) => {
    console.log(sentData);
    setRecipes((prevRecipes) => {
      const newObj = {
        id: prevRecipes[sentData.index].id,
        imageUrl: sentData.imageUrl,
        recipeName: sentData.recipeName,
        recipeDescription: sentData.recipeDescription,
      };
      const testArray = prevRecipes;
      testArray[sentData.index] = newObj;
      console.log(testArray);
      return testArray;
    });
    stopEditHandler();
  };
  const stopEditHandler = () => {
    setEditRecipeData((prevRecipe) => {
      return (prevRecipe.state = false);
    });
  };

  let recipeContent = <p>There is no recipe! Would you like to add one?</p>;
  if (recipes.length > 0)
    recipeContent = (
      <Recipes
        onDeleteRecipeHandler={deleteRecipeHandler}
        onEditRecipeCarrier={editRecipeCarrier}
        recipesArray={recipes}
      />
    );

  return (
    <main>
      {editRecipeData.state && (
        <EditRecipe
          recipe={editRecipeData}
          onEditRecipeHandler={editRecipeHandler}
          onStopEditHandler={stopEditHandler}
        />
      )}
      <NewRecipe onNewRecipeHandler={newRecipeHandler} />
      {recipeContent}
    </main>
  );
}

export default App;
