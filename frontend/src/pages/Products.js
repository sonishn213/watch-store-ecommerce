import React, { useContext, useEffect, createContext, useState } from "react";

import Content from "../component/sections/Products/Content";
import SidebarFilter from "../component/sections/Products/SidebarFilter";

export const FilterContext = createContext();
const Products = () => {
  const [filters, setFilter] = useState({});
  //render
  return (
    <FilterContext.Provider value={[filters, setFilter]}>
      <main className=" flex  ">
        <div className="w-2/12  relative border-r">
          <SidebarFilter />
        </div>
        <div className="w-10/12 ">
          <Content />
        </div>
      </main>
    </FilterContext.Provider>
  );
};

export default Products;
