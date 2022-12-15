import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import parse from 'html-react-parser';
import Ingredient from "./Ingredient";

const Detail = () => {
    const [recipeData, setRecipeData] = useState("");
    const [searchParams, ] = useSearchParams();
    const API_KEY = "4c7af75aba334e0ab6d7ec7d1f721f16";

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/${searchParams.get("recipeId")}/information?apiKey=${API_KEY}`
            )
            .then((res) => setRecipeData(res.data))
            .catch((err) => console.log(err.response.data.message))
    }, [searchParams]);

      useEffect(() => {
        console.log(recipeData.extendedIngredients)
    }, [recipeData]);
    
    return (
        <div className="container">
            { recipeData &&
            <div className="card">
                <div className="container card-image">
                    <div className="container">
                        <img
                            src={
                            recipeData.image
                                ? recipeData.image
                                : "./Image/defaultRecipe.jpg"
                            }
                            alt={`affiche ${recipeData.title}`}
                        />
                    </div>
                </div>
            
                <div className="card-content">
                    <span className="card-title"> <b>{recipeData.title}</b> </span>
                    <p> {recipeData.summary && parse(recipeData.summary)} </p>
                    <h5>List of Ingredients : </h5>
                    <table className="striped">
                        <tbody>
                            {recipeData.extendedIngredients.map((ingredient,id) => {
                                return <Ingredient ingredient={ingredient} key={id}/>
                            })}
                        </tbody>
                    </table>
                    <h5>Instructions </h5>
                    {parse(recipeData.instructions)}
                </div>
            </div>
            }
        </div>
    );
};

export default Detail;