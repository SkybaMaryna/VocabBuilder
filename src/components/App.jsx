import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { PublicRoute } from 'hoc';
import SharedLayout from './SharedLayout/SharedLayout';
import DictionaryPage from 'pages/DictionaryPage/DictionaryPage';
import { PrivateRoute } from 'hoc/PrivetRoute';
import RecommendPage from 'pages/RecommendPage/RecommendPage';
import TrainingPage from 'pages/TrainingPage/TrainingPage';

export const App = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={<PublicRoute>{<LoginPage />}</PublicRoute>}
      />
      <Route
        path="register"
        element={<PublicRoute>{<RegisterPage />}</PublicRoute>}
      />
      
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
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
