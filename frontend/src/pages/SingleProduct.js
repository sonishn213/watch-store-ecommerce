import React, { useEffect, useState } from "react";
import Loading from "../component/globals/Loading";

import { useParams } from "react-router-dom";
import MainInfo from "../component/sections/SingleProduct/MainInfo";
import Features from "../component/sections/SingleProduct/Features";
import PhotoSlider from "../component/sections/SingleProduct/PhotoSlider";
import RelatedProd from "../component/sections/SingleProduct/RelatedProd";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../features/products/singleProductSlice";
const SingleProduct = () => {
  const { id } = useParams();
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.singleProduct
  );
  const dispatch = useDispatch();
  //fetch products
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  //render
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <MainInfo data={products} />
      <Features data={products.details} />
      <PhotoSlider data={products.images} />
      <RelatedProd occation={products.occation} pid={products._id} />
    </main>
  );
};

export default SingleProduct;
