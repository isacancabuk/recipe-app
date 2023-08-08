import "./RecipeItem.css";

const RecipeItem = (props) => {
  return (
    <div className="recipe-item">
      <img src={props.recipe.imageUrl} />
      <h2>{props.recipe.recipeName}</h2>
      <p>{props.recipe.recipeDescription}</p>
    </div>
  );
};

export default RecipeItem;
