import React from "react";
import Button from "../inputs/Button";

import heroImage from "../../Assets/images/Watchhero21.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section id="herosection" className="bg-black text-white ">
      <div className="fluidContainer lg:flex md:py-20 pb-14 pt-6 items-center">
        <div className="lg:w-1/2 lg:order-2">
          <div className="xl:w-1/2  md:w-2/3 w-3/4 mx-auto">
            <img
              src={heroImage}
              alt="heroimage"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2 lg:order-1 lg:pr-6 mt-6 lg:mt-0 flex flex-col items-center lg:block">
          <div className="pb-20 text-center lg:text-left">
            <h4 className="tracking-widest text-accent">NEW ARRIVAL</h4>
            <h1 className="mb-6">TERMINATOR CHRONOGRAPH</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div>
            <Link to="view/62ceae8dafc46c97e263af1d">
              <Button varient="btn-filled">See product</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
