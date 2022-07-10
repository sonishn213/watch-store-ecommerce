import React, { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Loading from "../../globals/Loading";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../features/products/productSlice";

const RelatedProd = ({ occation, pid }) => {
  //fetch products
  const dispatch = useDispatch();
  const { products, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(
      getProduct({
        filter: JSON.stringify({ occation: [{ occation: occation }] }),
      })
    );
  }, [occation]);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>{message}</h2>
      </main>
    );
  }
  return (
    <section className="md:pt-24 pt-14 pb-14">
      <div className="fluidContainer">
        {products.length > 1 && (
          <>
            <h2 className="uppercase mb-10 text-center">Related Product</h2>
            <Splide
              aria-label="product images slider"
              options={{
                rewind: true,
                gap: "1.5rem",
                perPage: "5",
                padding: { left: "4rem", right: "4rem" },
                breakpoints: {
                  1024: {
                    perPage: 4,
                    gap: "1.5rem",
                    padding: { left: "3rem", right: "3rem" },
                  },

                  768: {
                    perPage: 3,
                    gap: "1rem",
                    padding: { left: "2rem", right: "2rem" },
                  },
                  640: {
                    perPage: 2,
                    gap: "0.5rem",
                    padding: 0,
                  },
                },
              }}
            >
              {products.length > 0 &&
                products.map((item) => {
                  return (
                    <SplideSlide>
                      <Link to={`/view/${item.id}`}>
                        <ProductCard
                          key={item.id}
                          img={item.mainimg}
                          title={item.p_name}
                          price={item.price}
                        />
                      </Link>
                    </SplideSlide>
                  );
                })}
            </Splide>
          </>
        )}
      </div>
    </section>
  );
};

export default RelatedProd;
