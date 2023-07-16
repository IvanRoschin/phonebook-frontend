import { LoadingToRedirect } from './LoadingToRedirect';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <LoadingToRedirect />;
};
