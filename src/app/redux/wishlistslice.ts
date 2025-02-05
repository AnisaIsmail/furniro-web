import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  wishlist: {
    _id: string;
    title: string;
  }[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<{ _id: string; title: string; }>) {
      const existingProductIndex = state.wishlist.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingProductIndex >= 0) {

   
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      // Remove product by its ID
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;


