import React from "react";

const Ingredient = ({ingredient}) => {

    return (
        <tr>
            <td><img src={ingredient.image == null || ingredient.image === 'no.jpg' ? './Image/defaultIngredient.jpg' : 'https://spoonacular.com/cdn/ingredients_100x100/'+ingredient.image} alt={ingredient.name}/></td>
            <td> {ingredient.amount} {ingredient.unit} </td>
            <td> {ingredient.name} </td>
        </tr>
    );
};

export default Ingredient;