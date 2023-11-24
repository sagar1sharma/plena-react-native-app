import { createSlice } from '@reduxjs/toolkit'
import { LayoutAnimation } from 'react-native';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const newItem = action.payload;
        const existingItemIndex = state.findIndex(item => item.id === newItem.id);
  
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
        } else {
          state.push({ ...newItem, quantity: 1 });
        }
      },
      deleteFromCart(state, action) {
        const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
  
          if (state[existingItemIndex].quantity > 1) {
            state[existingItemIndex].quantity -= 1;
          } else {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            state.splice(existingItemIndex, 1);
          }
      }
    }
  })
  


export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;