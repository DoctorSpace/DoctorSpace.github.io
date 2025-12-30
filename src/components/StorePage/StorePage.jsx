import React, { useState } from "react";
import { StoreCard } from "../StoreCard/StoreCard";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";

const StorePage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [openFilter, setOpenFilter] = useState(true);

  const OpenCloseFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="store">
      <h2 id="Store">Товары</h2>

      <div className="store__filter">
        <button type="button" onClick={OpenCloseFilter}>
          {openFilter ? "закрыть" : "Категории"}
        </button>
      </div>

      <div
        className={`${
          openFilter ? "store__container" : "store__container-close"
        }`}
      >
        <div
          className={`${
            openFilter
              ? "store__container-categories"
              : "store__container-categories-close"
          }`}
        >
          <CategoryFilter onFilter={setFilteredData} />
        </div>

        <div className="store__container-posts">
          <StoreCard data={filteredData} />
        </div>
      </div>
      
    </div>
  );
};

export default StorePage;
