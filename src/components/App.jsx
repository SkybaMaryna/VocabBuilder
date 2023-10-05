import { Route, Routes } from 'react-router';
import { PublicRoute, PrivateRoute } from 'hoc';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

import DictionaryPage from 'pages/DictionaryPage/DictionaryPage';
import RecommendPage from 'pages/RecommendPage/RecommendPage';
import TrainingPage from 'pages/TrainingPage/TrainingPage';
import { SharedLayout } from 'components';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<PublicRoute>{<LoginPage />}</PublicRoute>}
      />
      <Route
        path="/register"
        element={<PublicRoute>{<RegisterPage />}</PublicRoute>}
      />

      <Route path="/main" element={<SharedLayout />}>
        <Route
          path="dictionary"
          element={<PrivateRoute>{<DictionaryPage />}</PrivateRoute>}
        />
        <Route
          path="recommend"
          element={<PrivateRoute>{<RecommendPage />}</PrivateRoute>}
        />
        <Route
          path="training"
          element={<PrivateRoute>{<TrainingPage />}</PrivateRoute>}
        />
      </Route>
      <Route path="*" element={<SharedLayout />} />
    </Routes>
  );
};
