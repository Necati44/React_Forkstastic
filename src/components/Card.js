import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ recipe }) => {

  const addStorage = () => {
    let storedData = window.localStorage.recipes
      ? window.localStorage.recipes.split(",")
      : [];

    if (!storedData.includes(recipe.id.toString())) {
      storedData.push(recipe.id);
      window.localStorage.recipes = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.recipes.split(",");
    let newData = storedData.filter((id) => id != recipe.id);

    window.localStorage.recipes = newData;
  };

  return (
    <div className="col s12 m4">
        <div className="card large">
            <div className="card-image">
                <img
                    src={
                    recipe.image
                        ? recipe.image
                        : "./Image/defaultRecipe.jpg"
                    }
                    alt={`affiche ${recipe.title}`}
                />
            </div>
            <div className="card-content">
                <span className="card-title"> {recipe.title} </span>
            </div>
            <div className="card-action">
              <NavLink
                to={`/detail/?recipeId=${recipe.id}`}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                SHOW MORE
              </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Card;
