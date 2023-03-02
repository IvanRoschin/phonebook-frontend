import { createSlice } from '@reduxjs/toolkit';
import { register, login, current } from './operations';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.rejected, state => state)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

export const authReducer = AuthSlice.reducer;
