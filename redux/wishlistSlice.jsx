import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const existingIndex = state.findIndex(
                item => item.id === action.payload.id
              );
        
              if (existingIndex !== -1) {
                state.splice(existingIndex, 1);
              } else {
                state.push(action.payload);
              }    
        }
    }
  }
);

export const { addToWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer;