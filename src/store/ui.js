import { createSlice } from '@reduxjs/toolkit';

const initialState = { isCartVisible: false };

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = ui.actions;
export default ui.reducer;
