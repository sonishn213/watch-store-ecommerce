import React, { useEffect, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

import CartButton from "../inputs/CartButton";
import Account from "../navigation/Account";

const Navbar = () => {
  const NavLinksArr = [
    { text: "Home", link: "/" },
    { text: "casual", link: "/" },
    { text: "sports", link: "/" },
    { text: "shop", link: "/products" },
    { text: "about us", link: "/" },
    { text: "contact us", link: "/" },
  ];

  const [menushow, setMenuShow] = useState(false);

  //render
  return (
    <section className={` bg-black  top-0 w-full z-50 text-white`}>
      <div className="fluidContainer flex justify-between  items-center py-4 tracking-wide relative">
        <div
          onClick={() => {
            setMenuShow((p) => {
              return !p;
            });
          }}
          className={`text-xl  cursor-pointer lg:hidden `}
        >
          <AiOutlineMenu />
        </div>
        <div className="font-bold">
          <Link to="/">
            <h2>WATCHSTORE</h2>
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="lg:flex space-x-12 text-sm mr-12 items-center uppercase hidden">
            {NavLinksArr.map((item) => {
              return (
                <NavLink key={item.text} to={item.link}>
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
      <div className="relative px-6 pt-2">
        <div className={menushow ? "relative" : "relative hidden"}>
          <div className="absolute  border border-gray-dark w-full md:w-1/3 top-0 bg-white text-black text-center rounded-2xl py-6 font-medium tracking-wide">
            <nav className="flex flex-col space-y-6 text-sm uppercase  ">
              {NavLinksArr.map((item) => {
                return (
                  <NavLink key={item.text} to={item.link}>
                    {item.text}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
