import React from "react";

const CardCocktails = ({ cocktail }) => {
  return (
    <div className="card-cocktails">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h1>{cocktail.strDrink}</h1>
      <h3>{cocktail.strCategory}</h3>
      <h4>Type :{cocktail.strAlcoholic}</h4>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CardCocktails;
