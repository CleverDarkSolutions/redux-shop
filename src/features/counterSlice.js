import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    values: // this structure lacks scalability 
      [
        {id: 1, tempQ: 0, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 2, tempQ: 0,quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 3, tempQ: 0, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 4, tempQ: 0, quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 5, tempQ: 0,quantity: 0 , stock: 10, price: 0, label: ''},
        {id: 6, tempQ: 0,quantity: 0 , stock: 10, price: 0, label: ''},
      ]
    ,
    i: 0
  },
  reducers: {
    increment: (state, action) => {
      const i = action.payload;
      if(state.values[i].tempQ<state.values[i].stock)
          state.values[i].tempQ += 1;
    },
    decrement: (state, action) => {
      const i = action.payload;
      if(state.values[i].tempQ>0)
        state.values[i].tempQ -= 1;
    },
    setValues: (state,action) => {
      const i = action.payload;
      state.values[i.id] = i;
    }
  },
});

export const { increment, decrement, setValues} = counterSlice.actions;


export default counterSlice.reducer;
