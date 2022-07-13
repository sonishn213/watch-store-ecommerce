import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../SingleProduct/ProductCard";
import { Link } from "react-router-dom";
import Loading from "../../globals/Loading";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../features/products/productSlice";
import SidebarFilter from "./SidebarFilter";
import FilterButton from "./FilterButton";

//
//
//start
const Content = () => {
  const { filters } = useSelector((state) => state.sidebarFilter);
  const [sortState, setSortState] = useState("DESC");

  const dispatch = useDispatch();
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (Object.keys(filters).length === 0) {
      dispatch(getProduct({ sort: sortState }));
    } else {
      dispatch(
        getProduct({ filter: JSON.stringify(filters), sort: sortState })
      );
    }
  }, [filters, sortState]);

  return (
    <>
      <main className="w-full ">
        <section className="w-full border-b border-gray-dark">
          <div className=" py-6 fluidPaddingContainer">
            <h4>
              Showing {products?.length} of {products?.length}
            </h4>
            <div className="flex justify-between items-center">
              <div>
                <FilterButton>
                  <SidebarFilter />
                </FilterButton>
              </div>

              <select
                onChange={(e) => {
                  setSortState(e.target.value);
                }}
                value={sortState}
                className="px-6 py-2 bg-gray-light min-w-[150px] outline-none"
              >
                <option value="-1">Latest</option>
                <option value="1">Oldest</option>
              </select>
            </div>
          </div>
        </section>
        <section>
          {isLoading ? (
            <div className="py-6">
              <Loading />
            </div>
          ) : isError ? (
            <h4 className="fluidPaddingContainer py-6">{message}</h4>
          ) : (
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-6 fluidPaddingContainer">
              {products?.map((item) => {
                return (
                  <Link to={`/view/${item._id}`}>
                    <ProductCard
                      key={item._id}
                      img={item.mainimg}
                      title={item.p_name}
                      price={item.price}
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Content;
