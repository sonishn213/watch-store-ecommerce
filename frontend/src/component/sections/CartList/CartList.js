import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../inputs/Button";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  getCartItems,
  reset,
  deleteCartItem,
} from "../../../features/cart/cartItemSlice";
import Loading from "../../globals/Loading";

const CartList = ({ children }) => {
  const dispatch = useDispatch();
  //userstate
  const { user } = useSelector((state) => state.auth);
  //cart items state
  const { cartItems, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.cartItem
  );

  //get cart items
  // useEffect(() => {
  //   if (user) {
  //     dispatch(getCartItems());
  //   }
  // }, [user, dispatch]);

  //funcition to delete item cart
  const handleDeleteItem = (id) => {
    if (user) {
      dispatch(deleteCartItem(id));
    }
  };
  //if error
  if (isError) {
    return <h3>{message}</h3>;
  }

  //if loading

  //if not logged in
  if (!user) {
    return <NotLoggedIn />;
  } else if (isLoading) {
    return <Loading color="white" />;
  }
  //render
  return (
    <>
      {cartItems?.length > 0 ? (
        <div className="space-y-6">
          <h3 className="text-gray-dark">CART ITEMS</h3>
          <div className=" space-y-2">
            {cartItems?.map((item) => {
              return (
                <ListItem
                  key={item._id}
                  data={item}
                  onClick={handleDeleteItem}
                />
              );
            })}
          </div>
          {children}
        </div>
      ) : (
        <NoProduct />
      )}
    </>
  );
};
//cart items to render
const ListItem = ({ data, onClick }) => {
  return (
    <div className="flex w-full bg-gray-light rounded-md p-2">
      <div className="w-1/4 rounded-md overflow-hidden flex justify-center items-center">
        <img src={data.mainimg} alt="productImage" className="max-w-full" />
      </div>
      <div className="px-2 flex flex-col justify-between   min-w-0">
        <p className="font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
          {data.p_name}
        </p>
        <p className="font-semibold">₹ {data.price}</p>
      </div>
      <div
        onClick={() => onClick(data._id)}
        className=" flex items-center justify-end cursor-pointer hover:text-accentHover px-2"
      >
        <AiOutlineClose />
      </div>
    </div>
  );
};
//if no product found
const NoProduct = () => {
  return (
    <div className="text-gray-dark">
      <p>No items in the cart</p>
    </div>
  );
};
//if not logged in
const NotLoggedIn = () => {
  return (
    <div className="text-gray-dark">
      <p>Please login to view cart</p>
      <div className="flex space-x-2 mt-6">
        <Link to="/login">
          <Button varient="btn-filled">Login</Button>
        </Link>
        <Link to="/register">
          <Button varient="btn-filled">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartList;
