import React from "react";
import casualCat from "../../Assets/images/casualCat.png";
import sportsCat from "../../Assets/images/sportsCat.png";
import { Link } from "react-router-dom";
const CategorySection = () => {
  return (
    <section id="categorySection">
      <div className="fluidContainer md:space-x-10 space-x-0 space-y-10 md:space-y-0 lg:space-x-16  lg:w-2/5 md:w-full  lg:mx-auto md:flex lg:py-20  py-10 justify-between ">
        <CategoryCard title="CASUAL" src={casualCat} link="/products/casual" />

        <CategoryCard title="SPORTS" src={sportsCat} link="/products/sports" />
      </div>
    </section>
  );
};

const CategoryCard = ({ title, src, link }) => {
  return (
    <div className="relative md:w-1/2 w-full rounded-2.5xl overflow-hidden hover:opacity-90 cursor-pointer">
      <Link to={link}>
        <img src={src} alt="casualcategory" className="block w-full" />
        <div className="absolute categoryGradient w-full h-full top-0 left-0 z-index-10 text-white text-center flex flex-col justify-end items-center pb-6">
          <h4 className="tracking-wider">{title}</h4>
          <p className="text-sm">SHOP</p>
        </div>
      </Link>
    </div>
  );
};
export default CategorySection;
