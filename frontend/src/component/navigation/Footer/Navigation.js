import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="flex md:flex-row flex-col md:space-x-12 space-y-6 text-left md:space-y-0 text-sm md:items-center py2">
      <NavLink to="/">
        <div className="uppercase">Home</div>
      </NavLink>
      <NavLink to="/products">
        <div className="uppercase">shop</div>
      </NavLink>
      <NavLink to="/">
        <div className="uppercase">about us</div>
      </NavLink>
      <NavLink to="/">
        <div className="uppercase">contact us</div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
