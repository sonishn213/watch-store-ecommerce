import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../SingleProduct/ProductCard";
import { Link } from "react-router-dom";
import Loading from "../../globals/Loading";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../features/products/productSlice";
import SidebarFilter from "./SidebarFilter";
import FilterButton from "./FilterButton";
import { setFilters } from "../../../features/sidebarfilter/sidebarfilterSlice";
//
//
//
const Content = () => {
  //filters
  const { filters, checkedValue } = useSelector((state) => state.sidebarFilter);
  const [sortState, setSortState] = useState("-1");

  const dispatch = useDispatch();

  //clicked on category link

  //product state
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );

  //call setfilter when checked value changes
  useEffect(() => {
    dispatch(setFilters());
  }, [checkedValue, dispatch]);

  //calling getproducts based on filter existence
  useEffect(() => {
    console.log(filters, "inside");
    if (Object.keys(filters).length === 0) {
      dispatch(getProduct({ sort: sortState }));
    } else {
      console.log(filters, "inside else");
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
            <div className="md:hidden ">
              <h4>
                Showing {products?.length} of {products?.length}
              </h4>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="hidden md:block">
                  <h4>
                    Showing {products?.length} of {products?.length}
                  </h4>
                </div>
                <div className="md:hidden">
                  <FilterButton>
                    <SidebarFilter />
                  </FilterButton>
                </div>
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
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 md:py-6   fluidPaddingContainer">
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
