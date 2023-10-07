import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsOnline } from '../redux/selectors';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);
  const fromPage = location.state?.from.pathname || '/main/dictionary';
  if (isOnline) {
    return <Navigate to={fromPage} />;
  }
  return children;
};