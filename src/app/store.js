import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import mainSlice from '../features/mainSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        switches: mainSlice
    }
})