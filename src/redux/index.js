import { combineReducers } from 'redux';

import { authReducer } from './auth/authSlice';
import { filterReducer } from './contacts/filterSlice';
import { authApiReducer } from './auth/authApi';
import { contactsApiReducer } from './contacts/contactsApi';

export const rootReducer = combineReducers({
  authReducer,
  filterReducer,
  authApiReducer,
  contactsApiReducer,
});
