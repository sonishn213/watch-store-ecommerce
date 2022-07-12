import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    name: "",
    email: "",
    phno: "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
  },
  cartitems: [],
  totalprice: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setForm: (state, action) => {
      const data = action.payload;
      state.form[data.name] = data.value;
    },
    setCartItem: (state, action) => {
      state.cartitems = action.payload;
    },
    setFinalPrice: (state, action) => {
      state.totalprice = action.payload.totalprice;
    },
    resetCheckout: (state) => {
      state.form = initialState.form;
      state.cartitems = initialState.cartitems;
      state.totalprice = initialState.totalprice;
    },
  },
});

export const { setForm, setCartItem, setFinalPrice, resetCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
