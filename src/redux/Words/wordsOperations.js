import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/instance';
import Notiflix from 'notiflix';

export const getCategoriesThunk = createAsyncThunk(
    '@@words/getCategories',
    async () => {
      try {
        const res = await instance.get('words/categories');
        return res.data;
      } catch (error) {
        const errorMessage = error.response.data.message;
        Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      }
    }
  );

  export const getStatisticThunk = createAsyncThunk(
    '@@words/getStatistic',
    async () => {
      try {
        const res = await instance.get('words/statistics');
        return res.data;
      } catch (error) {
        const errorMessage = error.response.data.message;
        Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      }
    }
  );