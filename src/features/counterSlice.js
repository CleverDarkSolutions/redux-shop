import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    values: // this structure lacks scalability, but is convinient 
      [
        { id: 1, tempQ: 0, quantity: 0, stock: 10, price: 0, label: '' },
        { id: 2, tempQ: 0, quantity: 0, stock: 10, price: 0, label: '' },
        { id: 3, tempQ: 0, quantity: 0, stock: 10, price: 0, label: '' },
        { id: 4, tempQ: 0, quantity: 0, stock: 10, price: 0, label: '' },
        { id: 5, tempQ: 0, quantity: 0, stock: 10, price: 0, label: '' },
        { id: 6, tempQ: 0, quantity: 0, stock: 10, price: 0, label: '' },
      ]
    ,
    i: 0,
  },
  reducers: {
    increment: (state, action) => {
      const i = action.payload.id;
      switch (action.payload.which) { // switch is better than doing 3 different reducers
        case 'tempQ':
          if (state.values[i].tempQ < state.values[i].stock)
            state.values[i].tempQ += 1;
          break;
        case 'stock':
          state.values[i].stock += 1;
        break;

        case 'quantity':
          if(state.values[i].quantity < state.values[i].stock)
            state.values[i].quantity +=1;
      }

    },
    decrement: (state, action) => {
      const i = action.payload.id;
      switch (action.payload.which) {
        case 'tempQ':
          if (state.values[i].tempQ < 0)
            state.values[i].tempQ -= 1;
          break;
        case 'stock':
          state.values[i].stock -= 1;
          break;

        case 'quantity':
          if (state.values[i].quantity > 0)
            state.values[i].quantity -= 1;
      }

    },

    setValues: (state, action) => {
      const i = action.payload;
      state.values[i.id] = i;
    }
  },
});

export const { increment, decrement, setValues } = counterSlice.actions;


export default counterSlice.reducer;
