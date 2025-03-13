import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from './CardSlice'
export const Store = configureStore({
    reducer: {
       card: cardSliceReducer
    }
})