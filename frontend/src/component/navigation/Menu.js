import React from "react";
import { NavLink } from "react-router-dom";
const Menu = ({ NavLinksArr }) => {
  return (
    <nav className="flex space-x-12 text-sm mr-12 items-center uppercase ">
      {NavLinksArr.map((item) => {
        return (
          <NavLink
            key={item.text}
            end
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
  );
};

export default Menu;
