import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
       reducers: {
         increment: (state) => {state.count += 1;},
         decrement: (state) => {state.count -= 1;},
         incrementByValue: (state, action) => {state.count += action.payload;},
         decrementByValue: (state, action) => {state.count -= action.payload;},
         reset: (state) => {state.count = 0;},
       },
});

export const { increment, decrement, incrementByValue, decrementByValue, reset } = counterSlice.actions;
export default counterSlice.reducer;
