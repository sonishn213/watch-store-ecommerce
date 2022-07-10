import React from "react";
import suitGuy from "../../Assets/images/suitGuy.jpg";

const SomeWordsSection = () => {
  return (
    <section>
      <div className="fluidContainer md:flex items-stretch   space-y-12 md:space-y-0 pb-20">
        <div className="md:w-1/2 w-full  md:order-2 md:pl-6">
          <div className="rounded-2.5xl overflow-hidden">
            <img
              src={suitGuy}
              alt="sportsProduct"
              className="max-w-full w-full"
            />
          </div>
        </div>
        <div className=" md:w-1/2 w-full  md:order-1 md:pr-20 flex items-center justify-start text-center md:text-left">
          <div>
            <h1 className=" uppercase mb-10">
              BRINGING YOU THE <span className="text-accent">BEST</span> look
            </h1>
            <p className=" uppercase mb-10 text-lg tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomeWordsSection;
