import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;

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
      state.changed = true;

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
