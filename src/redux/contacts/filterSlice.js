import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Selectors
export const getFilter = state => state.filter;

// Actions
export const { setFilter } = filterSlice.actions;

//Reducers
export const filterReducer = filterSlice.reducer;
