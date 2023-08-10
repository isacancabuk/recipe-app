import "./Recipes.css";
import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  const deleteRecipeHandler = (selectedRecipe) =>
    props.onDeleteRecipeHandler(selectedRecipe);
  return (
    <div className="recipes">
      {props.recipesArray.map((item) => (
        <RecipeItem
          key={item.id}
          recipesArray={props.recipesArray}
          recipe={item}
          onDeleteRecipeHandler={deleteRecipeHandler}
        />
      ))}
    </div>
  );
};

export default Recipes;
