import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Form = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [search, setSearch] = useState("");
  // 4c7af75aba334e0ab6d7ec7d1f721f16
  // f97b04f086a240e4956b795291a4654e
  // 57c40386b18c4fcb9d7c6b296c97a1c7
  // 891da74732fd40169038edb180da9d20
  // aa89c3570dcd4d0d80f84a4060431433
  // 62701cc439db4825a3c4219d84ed13a4
  const API_KEY = "4c7af75aba334e0ab6d7ec7d1f721f16";
  const [notFound,setNotFound] = useState(false);

  const recherche = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=6&apiKey=${API_KEY}`
      )
      .then((reponse) => setRecipesData(reponse.data.results))
      .catch((err) => console.log(err.response.data.message));
  }

  //utiliser un boutton normal ou un submit, pour l'instant le submit ne fait rien
  const handleSubmit = event => {
    recherche();
    event.preventDefault();
  }

  useEffect(() => {
    if (recipesData) {
      setNotFound(true)
    }
  }, [recipesData]);

  return (
    <div className="container">
      <div>
        <form>
          <div className="file-field input-field">
          <input type="button" value="Rechercher" className="btn" onClick={handleSubmit}/>
            <div className="file-path-wrapper">
              <input
                type="text"
                placeholder="Entrez le nom de la recette"
                id="search-input"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="col s12">
        <div className="row">
            {recipesData && recipesData
            .map((recipe) => (
                <Card recipe={recipe} key={recipe.id} />
            ))}
            {notFound && 
              <span>Aucune recette correspondante n'a été retrouvée.</span>
            }
        </div>
      </div>
    </div>
  );
};

export default Form;
