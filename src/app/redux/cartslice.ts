import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart(state, action: PayloadAction<CartItem>) {
      state.cart.push(action.payload);
    },
    // Action to remove item from cart
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(item => item._id !== action.payload);
    },
    // Action to update the quantity of a cart item
    updateCartItemQuantity(state, action: PayloadAction<{ _id: string, quantity: number }>) {
      const itemIndex = state.cart.findIndex(item => item._id === action.payload._id);
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    }
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
