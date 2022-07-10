import { useEffect, useState } from "react";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import Button from "../../inputs/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setCartItem,
  setFinalPrice,
} from "../../../features/checkout/checkoutSlice";
const Summary = () => {
  const { cartItems } = useSelector((state) => state.cartItem);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartItems) {
      let total = 0;
      //find total price using cartitem and array reduce
      total = cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);
      //set total to state for displaying
      setTotalPrice(total);
      dispatch(setCartItem(cartItems));
      dispatch(setFinalPrice({ totalprice: total }));
    }
  }, [cartItems]);

  return (
    <div>
      <div className="p-6">
        <CartList>
          <div>
            <h5 className="mt-10 mb-2">Total Price : {totalPrice}</h5>
            <Link to="/checkout">
              <Button size="full">Continue to pay</Button>
            </Link>
          </div>
        </CartList>
      </div>
    </div>
  );
};

export default Summary;
