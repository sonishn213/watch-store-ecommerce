import React from "react";
import { NavLink } from "react-router-dom";
import LogoSmall from "../../globals/LogoSmall";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="fluidContainer md:flex md:justify-between  text-white py-12">
        <div className="flex flex-col space-y-12 md:w-1/4 text-center md:text-left">
          <LogoSmall widthClass="w-14" link="/" />
          <div>
            Layered with our proprietary technology, these watches even push the
            limits of precision and performance as we know it. And our mastery
            of aesthetics adds a distinctive style.
          </div>
        </div>
        <div className="space-y-16 md:block flex justify-between mt-6 md:mt-0">
          <Navigation />

          <div className="flex md:flex-row flex-col md:space-x-4 md:justify-end space-y-4 md:space-y-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
