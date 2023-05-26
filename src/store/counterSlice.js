import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    setHeader: (title,imgSrc,description) => {
      console.log(title,imgSrc,description);
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { setHeader,increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
