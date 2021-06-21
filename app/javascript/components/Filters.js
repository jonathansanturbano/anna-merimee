import React from "react";
import { useGlobalContext } from "../packs/context";

const Filters = () => {
  const {
    categories,
    categoryFilterIndex,
    setCategoryFilterIndex,
    isAvailable,
    setIsAvailable,
  } = useGlobalContext();

  return (
    <div className="text-center">
      <ul className="filters-list">
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={
                categoryFilterIndex === index
                  ? "filter category-active"
                  : "filter"
              }
              onClick={(e) => setCategoryFilterIndex(index)}
            >
              <button>{category}</button>
            </li>
          );
        })}
      </ul>
      <button
        className={
          isAvailable ? "filter-button disponible-filter-on" : "filter-button"
        }
        onClick={() => setIsAvailable(!isAvailable)}
      >
        Disponible
      </button>
    </div>
  );
};

export default Filters;
