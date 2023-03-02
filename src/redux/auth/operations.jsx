import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:8080/api';

// Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      toast.success('Verify your email');
      return data;
    } catch (error) {
      toast.error('Registration failed');
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      toast.success('Welcome on board');
      return data;
    } catch (error) {
      toast.error('Login failed');
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/logout', credentials);
      console.log('logout data:', data);
      console.log('logout token:', data.token);
      token.unset();
      toast.success('Good bye!');

      return data;
    } catch (error) {
      toast.error('Logout failed');
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
