import React from "react";
import { useGlobalContext } from "../packs/context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
      <div className="filters-container">
        <IoIosArrowBack
          onClick={(e) =>
            setCategoryFilterIndex(
              categoryFilterIndex - 1 === -1
                ? categories.length - 1
                : categoryFilterIndex - 1
            )
          }
        />
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
        <IoIosArrowForward
          onClick={(e) =>
            setCategoryFilterIndex(
              categoryFilterIndex + 1 === categories.length
                ? 0
                : categoryFilterIndex + 1
            )
          }
        />
      </div>
      <button
        className={
          isAvailable ? "filter-button disponible-filter-on" : "filter-button"
        }
        onClick={() => setIsAvailable(!isAvailable)}
      >
        Disponibles
      </button>
    </div>
  );
};

export default Filters;
