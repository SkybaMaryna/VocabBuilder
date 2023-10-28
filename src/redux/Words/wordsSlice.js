import { createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getCategoriesThunk, getStatisticThunk } from './wordsOperations';

const initialState = {
  categories: [],
  totalCountWords: null,
  loading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: '@@words',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoriesThunk.pending, state => {
        state.loading = true;
        Loading.hourglass('We are getting your data...');
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.loading = false;
        state.error = null;
        Loading.remove();
      })
      .addCase(getCategoriesThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        Loading.remove();
      })
      .addCase(getStatisticThunk.pending, state => {
        state.loading = true;
        Loading.hourglass('We are getting your data...');
      })
      .addCase(getStatisticThunk.fulfilled, (state, { payload }) => {
        state.totalCountWords = payload.totalCount;
        state.loading = false;
        state.error = null;
        Loading.remove();
      })
      .addCase(getStatisticThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        Loading.remove();
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
