import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItemService from "./cartItemService";
const initialState = {
  cartItems: null,
  isLoading: true,
  isError: false,
  isSuccess: false,
  message: "",
};
//add to cart
export const addToCart = createAsyncThunk(
  "cart/addtocart",
  async (productData, thunkAPI) => {
    try {
      //get token from auth state
      const token = thunkAPI.getState().auth.user.token;
      //send request
      return await cartItemService.addToCart(productData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //set reject message in thunkapi
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get users cart items
export const getCartItems = createAsyncThunk(
  "cart/getcartitems",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cartItemService.getCartItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//delete cart item

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id, thunkAPI) => {
    try {
      //get token from auth state
      const token = thunkAPI.getState().auth.user.token;
      //send request
      return await cartItemService.deleteItem(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //set reject message in thunkapi
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//delete all cart items of a user

export const deleteAllCartItem = createAsyncThunk(
  "cart/deleteAllCartItem",
  async (_, thunkAPI) => {
    try {
      //get token from auth state
      const token = thunkAPI.getState().auth.user.token;
      //send request
      return await cartItemService.deleteAllItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //set reject message in thunkapi
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//create slice
const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    resetCartItem: (state) => {
      state.cartItems = initialState.cartItems;
      state.isLoading = false;
      state.isError = initialState.isError;
      state.isSuccess = initialState.isSuccess;
      state.message = initialState.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "";
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.cartItems = null;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "";
        // state.cartItems = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.cartItems = null;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "";
        //delete item from state
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.cartItems = null;
      })
      .addCase(deleteAllCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAllCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(deleteAllCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        console.log(action);
        // state.cartItems = null;
      });
  },
});
export const { resetCartItem } = cartItemSlice.actions;
export default cartItemSlice.reducer;
