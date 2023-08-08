import { useState } from "react";
import "./NewRecipe.css";
import NewRecipeForm from "./NewRecipeForm";

const NewRecipe = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const isEditingHandler = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  const recipeHandler = (data) => {
    props.onAddRecipe(data);
    setIsEditing(false);
  };
  return (
    <div className="new-recipe">
      {!isEditing && <button onClick={isEditingHandler}>Add Recipe</button>}
      {isEditing && (
        <NewRecipeForm onEditing={stopEditing} onNewRecipe={recipeHandler} />
      )}
    </div>
  );
};

export default NewRecipe;
