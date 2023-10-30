import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThunk,
  registrationThunk,
} from './authOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  user: { name: '', email: '', id: '' },
  accessToken: null,
  online: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.pending, state => {
        state.loading = true;
        Loading.hourglass('We are validating your data...');
      })
      .addCase(registrationThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.accessToken = payload.token;
        state.online = true;
        state.loading = false;
        state.error = null;
        Loading.remove();
      })
      .addCase(registrationThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        Loading.remove();
      })
      .addCase(loginThunk.pending, state => {
        state.loading = true;
        Loading.hourglass('Log In...');
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.accessToken = payload.token;
        state.online = true;
        state.loading = false;
        state.error = null;
        Loading.remove();
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        Loading.remove();
      })
      .addCase(logoutThunk.pending, state => {
        state.loading = true;
        Loading.pulse('Log Out...');
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.accessToken = '';
        state.online = false;
        state.loading = false;
        state.error = null;
        Loading.remove();
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        Loading.remove();
      })
      .addCase(getCurrentUserThunk.pending, state => {
        state.loading = true;
        Loading.hourglass('We are checking your data...');
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.accessToken = payload.token;
        state.user.id = payload._id;
        state.online = true;
        state.loading = false;
        Loading.remove();
      })
      .addCase(getCurrentUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        
        state.loading = false;
        state.online = false;
        Loading.remove();
      });
  },
});

export const authReducer = authSlice.reducer;
