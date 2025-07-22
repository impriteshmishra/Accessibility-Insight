
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const scanSlice = createSlice({
  name: "scan",
  initialState,
  reducers: {
    setScanData: (state, action) => {
      state.data = action.payload;
    },
    clearScanData: (state) => {
      state.data = null;
    },
  },
});

export const { setScanData, clearScanData } = scanSlice.actions;
export default scanSlice.reducer;
