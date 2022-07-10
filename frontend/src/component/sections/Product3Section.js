import React from "react";
import sportsProduct from "../../Assets/images/sportsProduct.png";
import Button from "../inputs/Button";
const Product3Section = () => {
  return (
    <section className="pb-20">
      <div className="fluidContainer md:flex items-stretch md:space-x-10 space-y-12 md:space-y-0">
        <div className="md:w-1/2 w-full rounded-2.5xl overflow-hidden">
          <img
            src={sportsProduct}
            alt="sportsProduct"
            className="max-w-full w-full"
          />
        </div>
        <div className="bg-gray-light md:w-1/2 w-full rounded-2.5xl md:pl-32 flex items-center justify-center text-center md:text-left md:justify-start py-16 md:py-0">
          <div>
            <h1 className=" uppercase mb-10">DUST SPORTS</h1>
            <Button varient="btn-outlined">See product</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product3Section;
