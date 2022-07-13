import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

const initialState = {
  order: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//insert order

export const createOrder = createAsyncThunk(
  "order/create",
  async (productData, thunkAPI) => {
    try {
      //get token from auth state
      const token = thunkAPI.getState().auth.user.token;
      //send request
      return await orderService.createOrder(productData, token);
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

//get orders
export const getOrders = createAsyncThunk(
  "order/getorders",
  async (_, thunkAPI) => {
    try {
      //get token from auth state
      const token = thunkAPI.getState().auth.user.token;
      //send request
      return await orderService.getOrders(token);
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
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "";
        state.isSuccess = true;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "";
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
        state.order = null;
      });
  },
});

// export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
