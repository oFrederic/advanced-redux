import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      state.totalQuantity--;

      if (item.quantity > 1) {
        item.quantity--;
        item.total -= item.price;
      } else {
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
