import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCocktails from "./CardCocktails";
import Header from "./Header";

const FormCocktails = () => {
  const [dataCocktails, setDataCocktails] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`
      )
      .then((res) => setDataCocktails(res.data.drinks));
  }, [inputSearch]);
  return (
    <div>
      <Header />
      <h1>Cocktails</h1>
      <input
        type="search"
        placeholder="Taper ici le nom d'un cocktail"
        onChange={(e) => setInputSearch(e.target.value)}
        id="search"
      />
      <div className="container">
        {dataCocktails.map((cocktail) => (
          <CardCocktails key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
};

export default FormCocktails;
