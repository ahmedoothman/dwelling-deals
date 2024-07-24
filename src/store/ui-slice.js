import { createSlice } from '@reduxjs/toolkit';

const initialState = { testVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.testVisible = !state.testVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
