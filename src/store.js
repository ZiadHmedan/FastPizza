import { configureStore } from "@reduxjs/toolkit";
import userReducer from"./features/user/userSlice"
import cartReducer from"./features/cart/cartSlice"
// import { apiSlice } from "./features/api/apiSlice";
// import menuReducer from"./features/menu/menuSlice"
const store = configureStore({
    reducer: {
        // [apiSlice.reducerPath]:apiSlice.reducer,
        user: userReducer,
        cart: cartReducer,
        // menu: menuReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;