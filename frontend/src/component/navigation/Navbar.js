import React, { useEffect, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

import CartButton from "../inputs/CartButton";
import Account from "../navigation/Account";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const NavLinksArr = [
    { text: "Home", link: "/" },
    { text: "casual", link: "/casual" },
    { text: "sports", link: "/sports" },
    { text: "shop", link: "/products" },
    { text: "about us", link: "/aboutus" },
    { text: "contact us", link: "/contactus" },
  ];

  const [menushow, setMenuShow] = useState(false);

  //render
  return (
    <section className={` bg-black  top-0 w-full z-50 text-white`}>
      <div className="fluidContainer flex justify-between  items-center py-4 tracking-wide relative">
        <div className=" flex  items-center ">
          <div className="select-none active:text-accent">
            <MobileMenu NavLinksArr={NavLinksArr} />
          </div>
          <div className="font-bold">
            <div className="w-14">
              <Link to="/">
                <img
                  src="http://localhost:5000/watchlogo.png"
                  alt=""
                  className="max-w-full"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <nav className="lg:flex space-x-12 text-sm mr-12 items-center uppercase hidden">
            {NavLinksArr.map((item) => {
              return (
                <NavLink
                  key={item.text}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "hover:text-accentHover"
                  }
                >
                  {item.text}
                </NavLink>
              );
            })}
          </nav>
          <CartButton />
          <div className="ml-2 cursor-pointer hover:text-accent">
            <Account />
          </div>
        </div>
      </div>
      {/* <div className="relative px-6 pt-2">
        <div className={menushow ? "relative" : "relative hidden"}>
          <div className="absolute  border border-gray-dark w-full md:w-1/3 top-0 bg-white text-black text-center rounded-2xl py-6 font-medium tracking-wide">
            <nav className="flex flex-col space-y-6 text-sm uppercase  ">
              {NavLinksArr.map((item) => {
                return (
                  <NavLink
                    key={item.text}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "text-accent" : undefined
                    }
                  >
                    {item.text}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Navbar;
