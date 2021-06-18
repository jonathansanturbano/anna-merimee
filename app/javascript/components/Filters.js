import React from "react";
import { useGlobalContext } from "../packs/context";

const Filters = () => {
  const { categories, filterByCategorie } = useGlobalContext();
  return (
    <div>
      <ul className="filters-list">
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className="filter"
              onClick={(e) => filterByCategorie(e.currentTarget.textContent)}
            >
              <button>{category}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
