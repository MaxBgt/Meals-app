import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Meal react</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/cocktails">Cocktail</NavLink>
          </li>
          <li>
            <NavLink to="/meals">Meals</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
