import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/instance';
import Notiflix from 'notiflix';
import { selectToken } from 'redux/selectors';

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common['Authorization'] = ``;
};

export const registrationThunk = createAsyncThunk(
  '@@auth/registration',
  async credentials => {
    try {
      const res = await instance.post('users/signup', credentials);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
    }
  }
);

export const loginThunk = createAsyncThunk(
  '@@auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('users/signin', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logoutThunk = createAsyncThunk('@@auth/logout', async () => {
  try {
    const res = await instance.post('users/signout');
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    clearToken();
    return res;
  } catch (error) {
    const errorMessage = error.response.data.message;
    Notiflix.Notify.failure('Respond from server is ' + errorMessage);
  }
});

export const getCurrentUserThunk = createAsyncThunk(
  '@@auth/current',
  async (_, { getState }) => {
    const token = selectToken(getState());
    try {
      setToken(token);
      const res = await instance.get('users/current');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
    }
  }
);
