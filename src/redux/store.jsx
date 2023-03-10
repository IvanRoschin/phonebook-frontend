import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { authApi } from './auth/authApi';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'name', 'avatar'],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: persistReducer(authPersistConfig, authApi.reducer),
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
