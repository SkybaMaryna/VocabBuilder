import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThunk,
  registrationThunk,
} from './authOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  user: { name: '', email: '', _id: '' },
  accessToken: null,
  online: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  extraReducers: {
    [registrationThunk.pending]: (state) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [registrationThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.loading = false;
      Loading.remove();
    },
    [registrationThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      Loading.remove();
    },
    [loginThunk.pending]: (state) => {
      state.loading = true;
      Loading.hourglass('Log In...');
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      Loading.remove();
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.user = payload?.user;
      state.accessToken = payload?.token;
      state.online = true;
      state.loading = false;
      state.error = null;
      Loading.remove();
    },
    [logoutThunk.pending]: (state) => {
      state.loading = true;
      Loading.pulse('Log Out...');
    },
    [logoutThunk.fulfilled]: (state) => {
      state.user = { name: '', email: '' };
      state.accessToken = '';
      state.online = false;
      state.loading = false;
      state.error = null;
      Loading.remove();
    },
    [logoutThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCurrentUserThunk.pending]: (state) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.online = true;
      state.loading = false;
      state.user.id = payload._id;
      Loading.remove();
    },
    [getCurrentUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const authReducer = authSlice.reducer;
