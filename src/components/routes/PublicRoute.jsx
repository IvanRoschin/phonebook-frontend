import { LoadingToRedirect } from './LoadingToRedirect';
import { useAuth } from 'hooks/useAuth';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <LoadingToRedirect /> : children}</>;
};
