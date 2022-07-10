import React from "react";
import productImg1 from "../../Assets/images/product1.png";
import productImg2 from "../../Assets/images/product2.png";
import Button from "../inputs/Button";
const Product1Section = () => {
  return (
    <section className="md:pb-20 pb-12">
      <div className="fluidContainer bg-black rounded-2.5xl md:flex items-center pt-8 md:pt-0">
        <div className="md:w-1/2 w-full">
          <img
            src={productImg1}
            alt="productimg"
            className="max-w-full hidden md:block"
          />
          <img
            src={productImg2}
            alt="productimg"
            className="max-w-full md:hidden"
          />
        </div>
        <div className="md:w-1/2 w-full text-white  p-6 pb-12 md:p-20 md:text-left text-center">
          <div className="pb-20">
            <h1 className="mb-6 uppercase">MFB Analogue black</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div>
            <Button varient="btn-filled">See product</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product1Section;
