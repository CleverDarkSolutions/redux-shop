import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        subMenu1: true,
        subMenu2: false,
        subMenu3: false
    },
    reducers: {
        show1: (state) => {
            state.subMenu1 = true;
            state.subMenu2 = false;
            state.subMenu3 = false;
        },

        show2: (state) => {
            state.subMenu1 = false;
            state.subMenu2 = true;
            state.subMenu3 = false;
        },
        
        show3: (state) => {
            state.subMenu1 = false;
            state.subMenu2 = false;
            state.subMenu3 = true;
        }
    },
});

export const {show1,show2,show3} = mainSlice.actions;
export default mainSlice.reducer;