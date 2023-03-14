import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState: {
    name: null,
    token: null,
    avatar: null,
    subscription: null,
  },
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
          avatar: action.payload.avatar,
          subscription: action.payload,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.avatar = action.payload.avatar;
      state.subscription = action.payload.subscription;
    },
    logout: state => {
      localStorage.clear();
      state.name = null;
      state.token = null;
      state.avatar = null;
      state.subscription = null;
    },
  },
});

// Selectors
export const selectAuth = state => state.auth;

// Actions
export const { setUser, logout } = AuthSlice.actions;

// Reducer
export const authReducer = AuthSlice.reducer;
