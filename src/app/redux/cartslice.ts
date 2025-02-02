import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../types/products';

interface CartState {
  cart: {
    _id: string;
    title: string | undefined;
    image: string | undefined;
    price: number;
    quantity: number;
  }[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        state.cart[existingProductIndex].quantity += 1; // Increase quantity
      } else {
        state.cart.push({
          _id: action.payload._id,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1, // New item starts with quantity 1
        });
      }
    },
    removeFromCart2(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    // cartSlice.ts
removeFromCart: (state, action) => {
  if (action.payload._id) {
    state.cart = state.cart.filter((item) => item._id !== action.payload._id);
  } else {
    // Clear all items if action is empty
    state.cart = [];
  }
},

    // Action to update the quantity of an item
    updateCartItemQuantity(state, action: PayloadAction<{ _id: string; quantity: number }>) {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity; // Update the quantity
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
