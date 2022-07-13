import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
const FilterButton = ({ children }) => {
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
      <div onClick={toggleDrawer(true)} className=" cursor-pointer  ">
        <FaFilter />
      </div>

      <Drawer anchor={"left"} open={openState} onClose={toggleDrawer(false)}>
        <div className="w-[200px] h-full   bg-white">{children}</div>
      </Drawer>
    </div>
  );
};

export default FilterButton;
