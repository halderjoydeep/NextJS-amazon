import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items = [...state.items, newItem];
      }
    },
    removeFromCart: (state, action) => {
      console.log('called');
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else if (existingItem.quantity > 1) {
          existingItem.quantity--;
        }
      } else {
        return;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const itemsSelector = (state) => state.cart.items;

export const totalQuantitySelector = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const totalPriceSelector = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
