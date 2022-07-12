import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import singleProductReducer from "../features/products/singleProductSlice";
import cartItemReducer from "../features/cart/cartItemSlice";
import checkoutReducer from "../features/checkout/checkoutSlice";
import orderReducer from "../features/order/orderSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    singleProduct: singleProductReducer,
    cartItem: cartItemReducer,
    checkout: checkoutReducer,
    order: orderReducer,
  },
});
