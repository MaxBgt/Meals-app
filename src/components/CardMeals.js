import React from "react";

const CardMeals = ({ meal }) => {
  return (
    <div className="card-meals">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h1>{meal.strMeal}</h1>
      <h3>Origin : {meal.strArea}</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default CardMeals;
