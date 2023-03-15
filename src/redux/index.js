import { combineReducers } from 'redux';

import { authReducer } from './auth/authSlice';
import { filterReducer } from './contacts/filterSlice';
import { authApi } from './auth/authApi';
import { contactsApi } from './contacts/contactsApi';

export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  filter: filterReducer,
});
