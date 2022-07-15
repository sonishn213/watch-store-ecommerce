import React from "react";
import productImg1 from "../../Assets/images/bluewatch.jpg";

import productImg2 from "../../Assets/images/bluewatchmobile.jpg";
import { Link } from "react-router-dom";
import Button from "../inputs/Button";
const Product2Section = () => {
  return (
    <section className="md:pb-20 pb-12">
      <div className="fluidContainer bg-black rounded-2.5xl  relative overflow-hidden ">
        <div className="w-full">
          <img
            src={productImg1}
            alt="pimage"
            className="max-w-full min-w-full hidden md:block"
          />
          <img
            src={productImg2}
            alt="pimage"
            className="max-w-full min-w-full md:hidden"
          />
        </div>
        <div className="absolute top-0 left-0 w-full  h-full md:w-1/2 text-black md:pl-32 flex items-center justify-center md:justify-start text-center md:text-left">
          <div>
            <h1 className=" uppercase mb-10">CLASSIC GOLD</h1>
            <Link to="/view/62d00ae3593febc32343dbd0">
              <Button varient="btn-outlined">See product</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product2Section;
