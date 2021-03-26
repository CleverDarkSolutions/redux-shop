import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        subMenu1: true,
        subMenu2: false
    },
    reducers: {
        show1: (state) => {
            state.subMenu1 = true;
            state.subMenu2 = false;
        },

        show2: (state) => {
            state.subMenu1 = false;
            state.subMenu2 = true;
        },
    },
});

export const {show1,show2} = mainSlice.actions;
export default mainSlice.reducer;