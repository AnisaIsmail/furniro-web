import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "../redux/cartslice"
import wishlistReducer from '../redux/wishlistslice';

const store = configureStore ({
    reducer: {
        cart: CartReducer,
        wishlist: wishlistReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;