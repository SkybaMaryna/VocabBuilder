import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dashboard } from 'components';
import {
  getCategoriesThunk,
  getStatisticThunk,
} from 'redux/Words/wordsOperations';
import { getCurrentUserThunk } from 'redux/Auth/authOperations';

const DictionaryPage = () => {
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
    <div>
      <Dashboard />
    </div>
  );
};

export default DictionaryPage;
