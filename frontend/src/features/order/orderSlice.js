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

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.isSuccess = true;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.isSuccess = false;
    });
  },
});

// export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
