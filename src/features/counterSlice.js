import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    values: // this structure lacks scalability 
      [
        {id: 1, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 2, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 3, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 4, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 5, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 6, quantity: 0 , stock: 10, price: 0, label: ''},
      ]
    ,
    i: 0
  },
  reducers: {
    increment: (state, action) => {
      const i = action.payload;
      state.values[i].quantity += 1;
    },
    decrement: (state, action) => {
      const i = action.payload;
      if(state.values[i].quantity>0)
        state.values[i].quantity -= 1;
    },
    setValues: (state,action) => {
      const i = action.payload;
      state.values[i.id] = i;
    }
  },
});

export const { increment, decrement, setValues} = counterSlice.actions;


export default counterSlice.reducer;
