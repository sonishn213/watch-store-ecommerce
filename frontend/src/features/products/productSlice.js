import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProduct = createAsyncThunk(
  "api/getProducts",
  async (filters, thunkAPI) => {
    try {
      return await productService.getProducts(filters);
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

//initial state
const initialState = {
  products: null,
  isLoading: true,
  isSuccess: false,
  isError: false,
  message: "",
};
//products slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.products = null;
        state.message = "";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.message = "";
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.products = null;
        state.message = action.payload;
      });
  },
});

// export {}=productSlice.actions;
export default productSlice.reducer;
