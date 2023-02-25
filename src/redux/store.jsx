import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
});
