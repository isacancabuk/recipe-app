import "./RecipeItem.css";

const RecipeItem = (props) => {
  const deleteRecipeHandler = () => {
    props.onDeleteRecipeHandler(props.recipesArray.indexOf(props.recipe));
  };
  const editRecipeHandler = () =>
    props.onEditRecipeHandler(props.recipesArray.indexOf(props.recipe));
  return (
    <div className="recipe-item">
      <div className="delete-button">
        <button onClick={deleteRecipeHandler}>X</button>
      </div>
      <img src={props.recipe.imageUrl} />
      <h2>{props.recipe.recipeName}</h2>
      <p>{props.recipe.recipeDescription}</p>
      <div className="edit-button">
        <button onClick={editRecipeHandler}>Edit</button>
      </div>
    </div>
  );
};

export default RecipeItem;
