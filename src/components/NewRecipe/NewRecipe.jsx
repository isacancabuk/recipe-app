import { useState } from "react";
import "./NewRecipe.css";
import NewRecipeForm from "./NewRecipeForm";

const NewRecipe = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const isEditingHandler = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  const newRecipeHandler = (data) => {
    props.onNewRecipeHandler(data);
    setIsEditing(false);
  };
  return (
    <div className="new-recipe">
      {!isEditing && <button onClick={isEditingHandler}>Add Recipe</button>}
      {isEditing && (
        <NewRecipeForm
          onEditing={stopEditing}
          onNewRecipeHandler={newRecipeHandler}
        />
      )}
    </div>
  );
};

export default NewRecipe;
