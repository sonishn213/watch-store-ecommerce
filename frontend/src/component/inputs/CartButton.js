import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";
import CartList from "../sections/CartList/CartList";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../features/cart/cartItemSlice";
import Badge from "@mui/material/Badge";

const CartButton = () => {
  const { cartItems } = useSelector((state) => state.cartItem);
  const [openState, setOpenState] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
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
  //get all items on load
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, getCartItems]);

  return (
    <div className="">
      <div
        onClick={toggleDrawer(true)}
        className="text-lg  ${color}  cursor-pointer rounded-full p-2 hover:bg-gray-light/50 border border-transparent active:border-gray-dark/30"
      >
        <Badge
          badgeContent={cartItems ? cartItems.length : "0"}
          color="primary"
          showZero
        >
          <FaShoppingCart />
        </Badge>
      </div>

      <Drawer anchor={"right"} open={openState} onClose={toggleDrawer(false)}>
        <div className="w-[300px] h-full p-5 bg-black">
          <CartList>
            <div>
              <Link to="/checkout">
                <Button size="full">CHECKOUT</Button>
              </Link>
            </div>
          </CartList>
        </div>
      </Drawer>
    </div>
  );
};

export default CartButton;
