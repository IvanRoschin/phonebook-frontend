import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    email: null,
    isLoggedIn: false,
  },

  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.current.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
  },
});

//Action

// Reducer
export const authReducer = AuthSlice.reducer;
