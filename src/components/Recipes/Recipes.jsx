import "./Recipes.css";
import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  return (
    <div className="recipes">
      {props.data.map((item) => (
        <RecipeItem key={item.id} recipe={item} />
      ))}
    </div>
  );
};

export default Recipes;
