import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    values: 
      [
        {id: 1, stock: 0 , price: 0, label: ''},
        {id: 2, stock: 0 , price: 0, label: ''},
        {id: 3, stock: 0 , price: 0, label: ''}
      ]
    ,
    i: 0
  },
  reducers: {
    increment: (state, action) => {
      const i = action.payload;
      state.values.stock[i] += 1;
    },
    decrement: (state, action) => {
      const i = action.payload;
      if(state.values.stock[i]>0)
        state.values.stock[i] -= 1;
    },
    setValues: (state,action) => {
      const i = action.payload;
      state.values[i.id] = i;
    }
  },
});

export const { increment, decrement, setValues} = counterSlice.actions;


export default counterSlice.reducer;
