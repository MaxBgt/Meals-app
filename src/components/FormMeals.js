import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMeals from "./CardMeals";
import Header from "./Header";

const FormMeals = () => {
  const [dataMeals, setDataMeals] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`
      )
      .then((res) => setDataMeals(res.data.meals));
  }, [inputSearch]);
  return (
    <div>
      <Header />
      <h1>Meals</h1>
      <input
        type="search"
        placeholder="Type here the name of a meal"
        id="search"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meal-container">
        {dataMeals.map((meal) => (
          <CardMeals key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default FormMeals;
