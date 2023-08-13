import { useState } from "react";
import "./NewRecipe.css";
import NewRecipeForm from "./NewRecipeForm";

const NewRecipe = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const isAddingHandler = () => setIsAdding(true);
  const stopHandler = () => setIsAdding(false);

  const newRecipeHandler = (data) => {
    props.onNewRecipeHandler(data);
    setIsAdding(false);
  };

  return (
    <div className="new-recipe">
      {!isAdding && <button onClick={isAddingHandler}>Add Recipe</button>}
      {isAdding && (
        <NewRecipeForm
          editRecipeData={props.editRecipeData}
          onStopHandler={stopHandler}
          onNewRecipeHandler={newRecipeHandler}
        />
      )}
    </div>
  );
};

export default NewRecipe;
