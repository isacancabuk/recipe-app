import { useState } from "react";
import "./EditRecipe.css";

const EditRecipe = (props) => {
  const [url, setUrl] = useState(props.recipe.data.imageUrl);
  const [name, setName] = useState(props.recipe.data.recipeName);
  const [description, setDescription] = useState(
    props.recipe.data.recipeDescription
  );

  const inputHandler = (type, data) => {
    if (type === "url") setUrl(data);
    else if (type === "name") setName(data);
    else setDescription(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const editedRecipe = {
      index: props.recipe.index,
      id: props.recipe.data.id,
      imageUrl: url,
      recipeName: name,
      recipeDescription: description,
    };

    props.onEditRecipeHandler(editedRecipe);
  };
  return (
    <div>
      <div className="edit-recipe-bg"></div>
      <div className="edit-recipe-form">
        <form onSubmit={submitHandler}>
          <div className="controls">
            <label>Please enter the url for image</label>
            <input
              type="text"
              value={url}
              onChange={(event) => inputHandler("url", event.target.value)}
            />
            <label>Please enter the recipe name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => inputHandler("name", event.target.value)}
            />
            <label>Please enter the description</label>
            <input
              type="text"
              value={description}
              onChange={(event) =>
                inputHandler("description", event.target.value)
              }
            />
          </div>
          <div className="actions">
            <button type="button" onClick={props.onStopEditHandler}>
              Cancel
            </button>
            <button type="submit">Add Recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
