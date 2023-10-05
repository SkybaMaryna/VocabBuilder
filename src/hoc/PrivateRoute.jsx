// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// import { selectIsOnline } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  // const isOnline = useSelector(selectIsOnline);
  const isOnline = true;

  if (!isOnline) {
    return <Navigate to="/login" />;
  }

  return children;
};
