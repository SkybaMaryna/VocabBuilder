import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk } from 'redux/Auth/authOperations';
import {
  getCategoriesThunk,
  getStatisticThunk,
} from 'redux/Words/wordsOperations';
import { Header } from 'components';

export const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getStatisticThunk());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
