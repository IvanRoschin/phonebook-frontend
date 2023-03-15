import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './contacts/filterSlice';
import { authApi } from './auth/authApi';
import { contactsApi } from './contacts/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'name', 'avatar'],
};

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
