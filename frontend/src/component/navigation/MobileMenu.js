import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MobileMenu = ({ NavLinksArr }) => {
  const [openState, setOpenState] = useState(false); //menu state
  const location = useLocation();

  //menu toggle
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenState(open);
  };

  //close drawer after clicking on checkout button
  useEffect(() => {
    setOpenState(false);
  }, [location, setOpenState]);

  return (
    <div className="">
      <div onClick={toggleDrawer(true)} className="text-lg cursor-pointer ">
        <div className="text-xl  cursor-pointer lg:hidden mr-4">
          <AiOutlineMenu />
        </div>
      </div>

      <Drawer anchor={"left"} open={openState} onClose={toggleDrawer(false)}>
        <div className="min-w-[200px] h-full  bg-black select-none">
          <nav className="flex flex-col  text-sm uppercase text-white pt-20 pr-2">
            {NavLinksArr.map((item) => {
              return (
                <NavLink
                  key={item.text}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? " bg-accent py-2 px-5 rounded-r-full"
                      : "hover:bg-gray-dark py-2 px-5 rounded-r-full"
                  }
                >
                  {item.text}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
