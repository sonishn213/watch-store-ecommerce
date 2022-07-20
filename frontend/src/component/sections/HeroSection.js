import React from "react";
import Button from "../inputs/Button";

import heroImage from "../../Assets/images/Watchhero21.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section id="herosection" className="bg-black text-white mb-20">
      <div className="fluidContainer md:flex md:py-20 pb-14 pt-6 items-center">
        <div className="md:w-1/2 md:order-2">
          <div className="  md:w-2/3 w-3/4  mx-auto md:mx-0 md:ml-auto ">
            <img
              src={heroImage}
              alt="heroimage"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:order-1 md:pr-6 mt-6 md:mt-0 flex flex-col items-center md:block">
          <div className="pb-20 text-center md:text-left">
            <h4 className="tracking-widest text-accent">NEW ARRIVAL</h4>
            <h1 className="mb-6">TERMINATOR CHRONOGRAPH</h1>
            <p className="text-xl">
              This impressive, trendy watch from Roadster is sure to draw
              attention when you tell the time. Flaunt this timeless black piece
              with casuals when you head out to lunch for a smart look.
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
