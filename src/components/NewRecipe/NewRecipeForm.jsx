import { useState } from "react";
import "./NewRecipeForm.css";

const NewRecipeForm = (props) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const inputHandler = (type, data) => {
    if (type === "url") setUrl(data);
    else if (type === "name") setName(data);
    else setDescription(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Math.random(),
      imageUrl: url,
      recipeName: name,
      recipeDescription: description,
    };

    props.onNewRecipeHandler(newRecipe);
    setUrl("");
    setName("");
    setDescription("");
  };
  return (
    <div className="new-recipe-form">
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
          <button type="button" onClick={props.onEditing}>
            Cancel
          </button>
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default NewRecipeForm;
