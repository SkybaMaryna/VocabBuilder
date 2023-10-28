import { configureStore } from '@reduxjs/toolkit';
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
import { authReducer } from './Auth/authSlice';
import { wordsReducer } from './Words/wordsSlice';

const persistConfig = {
  key: 'data',
  version: 1,
  storage,
  whitelist: ['accessToken', 'user', 'online'],
};

const persistConfig2 = {
  key: 'words',
  version: 2,
  storage,
  whitelist: ['categories'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    words: persistReducer(persistConfig2, wordsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
