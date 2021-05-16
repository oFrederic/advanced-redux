import { createSlice } from '@reduxjs/toolkit';

const initialState = { isCartVisible: false, notification: null };

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = ui.actions;
export default ui.reducer;
