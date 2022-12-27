import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCocktails from "./components/FormCocktails";
import FormMeals from "./components/FormMeals";
import index from "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormMeals />} />
        <Route path="/cocktails" element={<FormCocktails />} />
        <Route path="/meals" element={<FormMeals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
