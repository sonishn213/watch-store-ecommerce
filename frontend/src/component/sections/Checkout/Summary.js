import { useEffect, useState } from "react";
import CartList from "../CartList/CartList";
import axios from "axios";
import Button from "../../inputs/Button";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../../features/order/orderSlice";
import {
  resetCartItem,
  deleteAllCartItem,
} from "../../../features/cart/cartItemSlice";
import {
  setCartItem,
  setFinalPrice,
  resetCheckout,
} from "../../../features/checkout/checkoutSlice";
import { useNavigate } from "react-router-dom";

const __DEV__ = document.domain === "localhost";

const Summary = () => {
  const { cartItems } = useSelector((state) => state.cartItem);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //set cart item and total price in redux state
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
  }, [cartItems, dispatch, setTotalPrice]);

  //razorpay payment

  const { form, cartitems, totalprice } = useSelector(
    (state) => state.checkout
  );

  async function displayRazorpay() {
    const response = await axios.post("/api/payments/razorpay/", {
      totalprice: totalprice,
    });
    const data = await response.data;
    //create product object
    let productArray = cartitems.map((product) => {
      return {
        p_id: product._id,
        p_name: product.p_name,
        price: product.price,
        mainimg: product.mainimg,
      };
    });
    //create order in DB
    dispatch(
      createOrder({
        form: form,
        products: productArray,
        amount: totalprice,
        razor_order_id: data?.id,
      })
    );

    const options = {
      key: __DEV__ ? "rzp_test_yigtEka9cZV5c2" : "PRODUCTION_KEY",
      currency: data?.currency,
      amount: data?.amount.toString(),
      order_id: data?.id,
      name: "WATCHSTORE",
      description: "Choose your payment method",
      image: "http://localhost:5000/watchlogo.png",
      handler: (response) => {
        alert("Payement successful Order placed");
        //reset checkout
        dispatch(resetCheckout());
        //reset cartitem
        dispatch(resetCartItem());
        //delete cart items from database
        dispatch(deleteAllCartItem());
        navigate("/successpayment");
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phno,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const testOrderCreate = () => {
    // // reset checkout
    // dispatch(resetCheckout());
    // //reset cartitem
    // dispatch(resetCartItem());
    // //delete cart items from database
    // dispatch(deleteAllCartItem());
    let productArray = cartitems.map((product) => {
      return {
        p_id: product._id,
        p_name: product.p_name,
        price: product.price,
        mainimg: product.mainimg,
      };
    });
    dispatch(
      createOrder({
        form: form,
        products: productArray,
        amount: totalprice,
        razor_order_id: "order:fake",
      })
    );
  };

  return (
    <div>
      <div className="p-6">
        <CartList>
          <div>
            <h5 className="mt-10 mb-2">Total Price : {totalPrice}</h5>

            <Button onClick={displayRazorpay} size="full">
              Continue to pay
            </Button>
            <Button onClick={testOrderCreate} size="full">
              test
            </Button>
          </div>
        </CartList>
      </div>
    </div>
  );
};

export default Summary;
