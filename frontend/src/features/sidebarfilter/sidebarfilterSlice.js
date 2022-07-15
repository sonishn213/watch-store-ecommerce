import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {},
  checkedValue: [],
  checkedState: new Array(9).fill(false),
};

const sidebarFilterSlice = createSlice({
  name: "sidebarfilter",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      let obj = {};

      state.checkedValue.forEach((item) => {
        obj[item.type] = obj[item.type]
          ? [...obj[item.type], { [item.type]: item.value }]
          : [{ [item.type]: item.value }];
      });
      console.log(obj);
      state.filters = obj;
    },
    setCheckedValue: (state, action) => {
      const value = action.payload.value;
      const type = action.payload.type;

      if (state.checkedValue.find((item) => item.value === value)) {
        state.checkedValue = state.checkedValue.filter(
          (item) => item.value !== value
        );
      } else {
        state.checkedValue = [
          ...state.checkedValue,
          { type: type, value: value },
        ];
      }
    },
    setCheckedState: (state, action) => {
      state.checkedState = state.checkedState.map((item, index) =>
        index == action.payload.position ? !item : item
      );
    },
  },
});

export const { setFilters, setCheckedValue, setCheckedState } =
  sidebarFilterSlice.actions;
export default sidebarFilterSlice.reducer;
